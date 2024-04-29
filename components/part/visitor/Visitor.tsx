import Link from 'next/link';
import React from 'react';

type Props = {
    visitorName: string|undefined,
    visitorLink: string|undefined
}

const VisitorLink = ({ name, link }:{ name: string|undefined, link: undefined|string }) => {
    return (
        <span       
            className='
                font-bold text-[#01d449]
            '>
            {
                link === undefined ?
                    name:
                    <Link
                        href={link}
                        target='_blank'
                        rel={name}
                        className='underline'>
                        {name}
                    </Link>
                }
        </span>
    )
}

const Visitor = ({ visitorName, visitorLink }: Props) => {
    return (
        <div
            className="
				w-full flex justify-center items-center
			">
            <div
                className="
					w-full max-w-[78rem] flex justify-center px-2.5 py-[10px]
				">
                <p
                    className={`
                        text-[11px] text-center transition-opacity duration-500
                        ${
                            visitorName === undefined && `
                                opacity-0 select-none pointer-events-none
                            `
                        }
                    `}>
                    The last visitor's name is <VisitorLink
                        name={visitorName}
                        link={visitorLink}
                    />.
                </p>
            </div>
        </div>
    );
}

export default Visitor;