import Class from '@/constants/classes';
import React from 'react';

const Hello = () => {
    return (
        <div
			className="
				w-full flex justify-center
			">
			<div
				className="
					w-full flex justify-center px-2.5
				">
				<div
					className='
						w-full flex flex-col items-center gap-y-[10px]
					'>
					<p
						className={Class.Section_Title}>
						HELLO!
					</p>
					<p
						className='
							w-full text-center text-[14px]
							md:text-[15px]
							lg:text-[16px]
						'>
						My name is John Soatra. I'm a Software Engineer.<br />
						I'm a modern software engineer with experience for 6 years.<br />
						My perfection is to logic, design and create program,<br />
						software and website run on smartphone and desktop.
					</p>
                </div>
            </div>
        </div>
    );
}

export default Hello;