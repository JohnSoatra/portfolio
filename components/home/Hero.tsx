import React from "react";

const Hero = () => {
	return (
		<div className="w-full flex flex-col items-center font-hexa text-center">
			<h1
				id="hero-text"
				className="
						sm:gap-y-[20px]
						md:gap-x-[25px]
					">
				I am John Soatra
			</h1>
			<h2
				id="hero-text"
				className="
						sm:gap-y-[20px]
						md:gap-x-[25px]
					">
				a software engineer
			</h2>
		</div>
	);
};

export default Hero;
