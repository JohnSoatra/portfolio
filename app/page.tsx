'use client';
import React, { useEffect, useState } from "react";
import Hero from "@/components/part/Hero";
import Desc from "@/components/part/Desc";
import Background from "@/components/part/Background";
import Hello from "@/components/part/detail/Hello";
import SpaceBottom from "@/components/part/SpaceBottom";
import Skill from "@/components/part/detail/Skill";
import Portfolio from "@/components/part/detail/Portfolio";
import Contact from "@/components/part/detail/Contact";
import Footer from "@/components/layout/Footer";
import Visitor from "@/components/part/visitor/Visitor";
import UpdateVisitor from "@/components/part/visitor/Update";

const Home = () => {
    const [visitorName, setVisitorName] = useState(undefined as undefined|string);
    const [visitorLink, setVisitorLink] = useState(undefined as undefined|string);
    const [topPercent, setTopPercent] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const work = async () => {
            const response = await fetch('/api', {
                signal: controller.signal
            });
            const data: LastVisitor|null = await response.json();

            if (data !== null) {
                setVisitorName(data.name);
                setVisitorLink(data.link||undefined);
            }
        }

        work();

        return () => {
            controller.abort();
        }
    }, []);

    return (
        <div
            className="
                w-screen h-screen fixed inset-0 flex flex-col items-center overflow-scroll
            "
            onScroll={(evt) => {
                const target = evt.currentTarget;
                const percent = target.scrollTop / (target.scrollHeight - target.clientHeight);

                setTopPercent(percent);
            }}>
            <Background
                topPercent={topPercent}
            />
            <div
                className="
                    w-full z-10
                ">
                <div
                    className="
                        w-full min-h-screen flex flex-col items-center
                    ">
                    <Visitor
                        visitorName={visitorName}
                        visitorLink={visitorLink}
                    />
                    <Hero />
                    <Desc />
                </div>
                <Hello />
                <Skill />
                <Portfolio />
                <Contact />
                <UpdateVisitor
                    onSuccessUpdate={(visitor) => {
                        setVisitorName(visitor.name);
                        setVisitorLink(visitor.link||undefined);
                    }}
                />
                <SpaceBottom />
                <Footer />
            </div>
        </div>
    );
}

export default Home;