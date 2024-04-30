import React from "react";
import Vars from "@/constants/vars";
import Any from "@soatra/any";

const Desc = () => {
    return (
        <div
			className="
				w-full flex justify-center mt-6  
				sm:mt-8 
				md:mt-10
			">
			<div
				className="
					w-full max-w-[78rem] flex justify-center px-2.5 mb-10
					sm:mb-16
					md:mb-32
					lg:mb-40
					xl:mb-48
				">
				<Any
					as="p"
					className="
						w-full flex flex-col text-center text-[15px]
						md:text-[16px]
						lg:text-[17px]
					"
					from="opacity-0"
					to={[
						{
							state: 'opacity-85',
							duration: Vars.Duration,
							easing: Vars.Easing
						}
					]}>
					I am a lucky boy,<br />
					so you are also lucky,<br />
					because you know me.
				</Any>
			</div>
		</div>
    );
};

export default Desc;
