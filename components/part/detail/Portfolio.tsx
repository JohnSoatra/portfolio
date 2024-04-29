import React from 'react';
import Class from '@/constants/classes';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Country from '@/assets/icons/country.png';
import Todo from '@/assets/icons/todo.webp';
import EightLife from '@/assets/icons/8life.png';
import Joa from '@/assets/icons/joa.png';
import GxDx from '@/assets/icons/gx-dx.png';

const Portfolios: {
	image: StaticImageData,
	link: string
}[] = [
	{
		image: Joa,
		link: 'https://www.joa-holdings.com/',
	},
	{
		image: Todo,
		link: 'https://todo-omega-dun.vercel.app/',
	},
	{
		image: Country,
		link: 'https://country-soatra.vercel.app/'
	},
	{
		image: GxDx,
		link: 'https://joa-holding.jp/',
	},
	{
		image: EightLife,
		link: 'https://www.8life.cloud/',
	},
]

const Portfolio = () => {
    return (
        <div
			className={Class.Section}>
			<div
				className="
					w-full flex justify-center px-2.5
				">
				<div
					className='
						w-full flex flex-col items-center gap-y-[20px]
					'>
					<p
						className={Class.Section_Title}>
						Portfolio
					</p>
					<div
						className='
							w-full flex flex-col items-center gap-y-[40px]
							md:gap-y-[50px]
							lg:gap-y-[60px]
						'>
						{
							Portfolios.map((port, index) =>
								<div
									key={index}
									className='
										w-full flex justify-center items-center
									'>
									<Link
										href={port.link}
										target='_blank'
										rel='created'
										className='
											w-full h-[44px] transition-transform duration-300
											hover:scale-105
										'>
										<Image
											src={port.image}
											alt='created'
											className='w-full h-full object-contain grayscale-[10%]'
										/>
									</Link>
								</div>
							)
						}
					</div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;