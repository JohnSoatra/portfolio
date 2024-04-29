import React from 'react';
import Link from 'next/link';
import Class from '@/constants/classes';

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
					<p
						className={Class.Section_Title}>
						Contact
					</p>
					<div
						className='
							flex flex-col gap-y-[10px] text-[14px]
							md:text-[15px]
							lg:text-[16px]
						'>
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
											w-[81px]
											md:w-[130px]
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
					</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;