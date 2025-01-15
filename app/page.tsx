import React from "react";
import Link from "next/link";
import Image from "next/image";
import Airplane from "@/components/common/Airplane";
import Background from "@/components/layout/Background";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
            <div className="w-full min-h-full max-w-[1080px] relative flex-1 flex flex-col items-center">
                <Background />
                <Airplane />
                <div className="z-10 flex flex-col items-center mt-[199px]">
                    <h1 className="tracking-wider font-medium text-center text-[46px] md:text-[60px] xl:text-[83px]">
                        John Soatra
                    </h1>
                    <p className="text-center text-[20px] md:text-[23px] xl:text-[31px] mt-[5px]">
                        “ I am lucky, so you are. <br />
                        Because you know me. ”
                    </p>
                    <h2 className="tracking-wider self-end text-end text-[15px] mt-[30px]">a programer.</h2>
                    <Link href="https://www.linkedin.com/in/soatra/" className="w-[24px] h-[24px] absolute top-5 left-5 opacity-85" target="_blank">
                        <Image src='/icons/linkedin.png' width={24} height={24} alt="linkedin" priority />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
