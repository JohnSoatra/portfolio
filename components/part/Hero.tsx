'use client';
import Any from "@soatra/any";
import { Easings } from "@soatra/any/static";
import React, { useEffect, useState } from "react";

const Texts: TextType[] = [
    {
        text: "I am John Soatra",
        timeSpan: [
            {
                after: 0,
                delay: 0,
                duration: 300,
            },
            {
                after: 1,
                delay: 1200,
                duration: 350,
            },
            {
                after: 1,
                delay: 1200,
                duration: 350,
            },
            {
                after: 1,
                delay: 500,
                duration: 350,
            },
        ],
    },
    {
        text: "a software engineer",
        timeSpan: [
            {
                after: 0,
                delay: 0,
                duration: 350,
            },
            {
                after: 1,
                delay: 1000,
                duration: 350,
            },
            {
                after: 1,
                delay: 500,
                duration: 350,
            },
        ],
    },
];

const State: {
    from: string;
    to: string;
    end: string;
} = {
    from: "translate-y-[-30px] opacity-0",
    to: "translate-y-[0px] opacity-100",
    end: "translate-y-[30px] opacity-0",
};

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(-1);

    useEffect(() => {
        if (startIndex === -1 && endIndex === -1) {
            setTimeout(() => {
                setTextIndex(textIndex === 0 ? 1 : 0);
                setStartIndex(0);
            }, 750);
        }
    }, [startIndex, endIndex]);

    return (
        <div
            className="
				w-full mt-[15vh] flex justify-center items-center
			">
            <div
                className="
					w-full max-w-[78rem] flex justify-center px-2.5
				">
                <div
                    className="
						w-full flex flex-col items-center
					">
                    <h1
                        className="
							w-full text-[25px] font-hexa tracking-[5px] text-center flex flex-wrap justify-center items-center gap-x-[20px]
							md:text-[35px] 
							lg:text-[50px]
						">
							{
								Texts[textIndex].text
								.split(" ").map((each, index) => {
									const timeSpan = Texts[textIndex].timeSpan;

									return (
										<Any
											id="my-text"
											key={index}
											start={startIndex >= index}
											as="p"
											animatedProperties={[
												'opacity',
												'transform'
											]}
											from={State.from}
											to={[
												{
													state: State.to,
													duration: timeSpan[index].duration,
													easing: Easings.Cubic(
														0.32,
														0.9,
														0.47,
														0.99
													),
													delay: timeSpan[index].delay,
													on: {
														complete:
															index < timeSpan.length - 1
																? timeSpan[index + 1]
																	.after
																: 1,
														task() {
															setStartIndex(
																startIndex + 1
															);
														},
													},
													onEnd: () => {
														if (
															index ===
															timeSpan.length - 1
														) {
															setTimeout(() => {
																setEndIndex(0);
															}, 2000);
														}
													},
												},
												{
													start: endIndex >= index,
													state: State.end,
													duration: 400,
													easing: Easings.Cubic(
														1,
														0.53,
														0.46,
														1
													),
													delay: 0,
												},
											]}
											onEnd={() => {
												if (endIndex === timeSpan.length - 1) {
													setStartIndex(-1);
													setEndIndex(-1);
												} else {
													setEndIndex(endIndex + 1);
												}
											}}
										>
											{each}
										</Any>
									);
							})
						}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
