import React from "react";
import Link from "next/link";
import Image from "next/image";
import Airplane from "@/components/common/Airplane";
import Background from "@/components/layout/Background";
import MovieController from "@/components/client/MovieController";

const Home = async () => {
    return (
        <div className="w-full flex flex-col items-center overflow-hidden">
            <Background />
            {/* <Airplane /> */}
            <div className="w-full max-w-container z-10 relative flex flex-col items-center">
                <div className="min-h-screen flex flex-col items-center pt-[199px]">
                    <h1 className="tracking-wider font-medium text-center text-[46px] md:text-[60px] xl:text-[83px]">
                        John Soatra
                    </h1>
                    <p className="text-center text-[20px] md:text-[23px] xl:text-[31px] mt-[5px]">
                        “ I am lucky, so you are. <br />
                        Because you know me. ”
                    </p>
                    <h2 className="tracking-wider self-end text-end text-[15px] mt-[30px] opacity-75">a developer.</h2>
                    <Link href="https://www.linkedin.com/in/soatra/" className="w-[24px] h-[24px] absolute top-5 left-5 opacity-85" target="_blank">
                        <Image src='/icons/linkedin.png' width={24} height={24} alt="linkedin" priority />
                    </Link>
                </div>
                <MovieController />
            </div>
        </div>
    );
}

export default Home;
