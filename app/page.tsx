import React from "react";
import Airplane from "@/components/common/Airplane";
import Background from "@/components/layout/Background";
import MovieController from "@/components/client/MovieController";
import Profile from "@/components/home/Profile";

const Home = async () => {
    return (
        <div className="w-full h-screen flex flex-col items-center overflow-y-scroll snap-y snap-mandatory">
            <Background />
            {/* <Airplane /> */}
            <div
                className="w-full relative z-10 flex flex-col items-center">
                <Profile />
                <MovieController />
            </div>
        </div >
    );
}

export default Home;
