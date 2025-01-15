import React from "react";
import Hero from "@/components/home/Hero";
import Desc from "@/components/home/Bio";
import Link from "next/link";
import Image from "next/image";
import Airplane from "@/components/common/Airplane";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
            <div className="w-full min-h-full max-w-[1080px] relative flex-1 flex flex-col justify-center items-center pb-[190px]">
                <Airplane />
                <div className="z-10 flex flex-col justify-center items-center gap-y-[10px] rounded-full aspect-square p-[40px]">
                    {/* <Hero /> */}
                    <div className="flex flex-col items-center text-center text-[32px] md:text-[42px] xl:text-[52px]">
                        <h1 className="tracking-wider font-medium ">John Soatra</h1>
                        {/* <h2 className="tracking-wider">software engineer</h2> */}
                    </div>
                    <Desc />
                    <div className="flex flex-col items-center text-center text-[22px] md:text-[30px] xl:text-[40px]">
                        {/* <h1 className="tracking-wider font-medium">John Soatra</h1> */}
                        <h2 className="tracking-wider ">software engineer</h2>
                    </div>
                    <Link href="https://www.linkedin.com/in/soatra/" className="w-[24px] h-[24px] absolute top-5 left-5 opacity-85" target="_blank">
                        <Image src='/icons/linkedin.png' width={24} height={24} alt="linkedin" />
                    </Link>
                    {/* <p>I know you need time to think, but now you already spend it all.</p> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
