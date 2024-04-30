import React from 'react';
import Class from '@/constants/classes';
import Any from '@soatra/any';
import Vars from '@/constants/vars';

const Skills: {
	name: string,
	skills: string[]
}[] = [
	{
		name: 'Back-end Framework',
		skills: [
			'Express',
			'Node',
		]
	},
	{
		name: 'Front-end Framework',
		skills: [
			'React',
			'Vue',
		]
	},
	{
		name: 'Full-stack Framework',
		skills: [
			'Next',
			'Nuxt',
		]
	},
	{
		name: 'Language',
		skills: [
			'TypeScript',
			'HTML',
			'CSS',
		]
	},
	{
		name: 'Technology',
		skills: [
			'Tailwind',
			'Linux',
			'AWS',
		]
	}
];

const Skill = () => {
    return (
        <section
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
						Skill
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
							Skills.map((skill, index) =>
								<div
									key={index}
									className='
										w-full flex flex-wrap gap-x-[10px]
										md:gap-x-[20px]
										lg:gap-x-[30px]
									'>
									<p
										className='
											w-[174px]
											md:w-[184px]
											lg:w-[195px]
										'>
										{skill.name}:
									</p>
									<p>
										{skill.skills.join(', ')}.
									</p>
								</div>
							)
						}
					</Any>
                </div>
            </div>
        </section>
    );
}

export default Skill;