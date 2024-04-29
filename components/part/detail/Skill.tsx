import React from 'react';
import Class from '@/constants/classes';

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
					<p
						className={Class.Section_Title}>
						Skill
					</p>
					<div
						className='
							flex flex-col gap-y-[10px] text-[14px]
							md:text-[15px]
							lg:text-[16px]
						'>
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
					</div>
                </div>
            </div>
        </section>
    );
}

export default Skill;