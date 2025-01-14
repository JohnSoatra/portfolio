import React from "react";
import Hero from "@/components/home/Hero";
import Desc from "@/components/home/Desc";
import Footer from "@/components/layout/Footer";

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <Desc />
            <div className="flex-1"></div>
            <Footer />
        </div>
    );
}

export default Home;
