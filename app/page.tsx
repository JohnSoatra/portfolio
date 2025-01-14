import React from "react";
import Hero from "@/components/home/Hero";
import Desc from "@/components/home/Bio";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
            <div className="flex-1 flex flex-col justify-center items-center mb-[190px]">
                <div className="flex flex-col justify-center gap-y-[10px] rounded-full aspect-square p-[40px]">
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
                </div>
            </div>
        </div>
    );
}

export default Home;
