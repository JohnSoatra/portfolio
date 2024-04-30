import React from 'react';
import Link from 'next/link';
import Class from '@/constants/classes';
import Any from '@soatra/any';
import Vars from '@/constants/vars';

const Contacts: {
	name: string,
	link: string,
	title: string,
}[] = [
	{
		name: 'Email',
		link: 'mailto:johnsoatra@gmail.com',
		title: '@johnsoatra'
	},
	{
		name: 'Telegram',
		link: 'https://t.me/soatra',
		title: '@soatra'
	},
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/soatra',
		title: '@soatra'
	},
]

const Contact = () => {
    return (
        <div
			className={Class.Section}>
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
						className={Class.Section_Title}
						from="opacity-0"
						to={[
							{
								state: 'opacity-100',
								duration: Vars.Duration,
								easing: Vars.Easing,
								delay: Vars.Delay,
							}
						]}>
						Contact
					</Any>
					<Any
						className='
							flex flex-col gap-y-[10px] text-[14px]
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
						{
							Contacts.map((contact, index) =>
								<div
									key={index}
									className='
										w-full flex flex-wrap gap-x-[10px]
										md:gap-x-[20px]
										lg:gap-x-[30px]
									'>
									<p
										className='
											w-[100px]
											sm:w-[130px]
											md:w-[145px]
											lg:w-[160px]
										'>
										{contact.name}:
									</p>
									<Link
										href={contact.link}
										target='_blank'
										rel={contact.name}
										className='
											hover:underline
										'>
										{contact.title}
									</Link>
								</div>
							)
						}
					</Any>
                </div>
            </div>
        </div>
    );
}

export default Contact;