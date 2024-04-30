import React from 'react';
import Class from '@/constants/classes';
import Vars from '@/constants/vars';
import Any from '@soatra/any';

const Hello = () => {
    return (
        <div
			className="
				w-full flex justify-center mt-[1px]
			">
			<div
				className="
					w-full flex justify-center px-2.5
				">
				<div
					className='
						w-full flex flex-col items-center gap-y-[10px]
					'>
					<Any
						as='h2'
						className={Class.Section_Title + 'leading-[1]'}
						from="opacity-0"
						to={[
							{
								state: 'opacity-100',
								duration: Vars.Duration,
								easing: Vars.Easing,
								delay: Vars.Delay,
							}
						]}>
						HELLO!
					</Any>
					<Any
						as='p'
						className='
							w-full text-center text-[14px]
							md:text-[15px]
							lg:text-[16px]
						'
						from="opacity-0"
						to={[
							{
								state: 'opacity-100',
								duration: Vars.Duration,
								easing: Vars.Easing,
								delay: Vars.Delay,
							}
						]}>
						My name is John Soatra. I'm a Software Engineer.<br />
						I'm a modern software engineer with experience for 6 years.<br />
						My perfection is to logic, design and create program,<br />
						software and website run on smartphone and desktop.
					</Any>
                </div>
            </div>
        </div>
    );
}

export default Hello;