import React from 'react';
import Image from "next/image";
import Door from "@/assets/images/door.webp";
import Vars from '@/constants/vars';

const Background = ({ topPercent }: { topPercent: number }) => {
    return (
        <div
            className="
                w-full max-w-[300px] h-full fixed left-1/2 -translate-x-1/2  z-[-1] opacity-50
                lg:max-w-[400px]
            "
            style={{
                top: `${40 - topPercent*Vars.MaxTran}%`
            }}>
            <Image
                src={Door}
                alt="door"
                priority
                className="w-full h-full object-contain"
            />
        </div>
    );
}

export default Background;