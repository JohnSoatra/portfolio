'use client';
import React, { useEffect, useRef, useState } from 'react';
import Classes from '@/constants/classes';
import Vars from '@/constants/vars';
import profaneWords from 'profane-words';
import toast from 'react-hot-toast';

type Props = {
    onSuccessUpdate: (visitor: {
        name: string;
        link: string;
    }) => void
}

const Error = ({ message }: { message: string }) => {
    return (
        <div className="text-sm text-[#ff4545]">{message}</div>
    );
}

const Class = {
    Input: `
        w-full bg-transparent block p-2 transition border border-[#8a8d8e] rounded
        md:p-2.5
        focus:border-[#b8bcbe]
    `,
    Label: `
        opacity-90
    `
}

const UpdateVisitor = ({ onSuccessUpdate }: Props) => {
    const [show, setShow] = useState(false);
    const [errorName, setErrorName] = useState(undefined as undefined|string);
    const [errorContactLink, setErrorContactLink] = useState(undefined as undefined|string);
    const [name, setName] = useState('');
    const [contactLink, setContactLink] = useState('');
    const refName = useRef<HTMLInputElement>(null);
    const refContactLink = useRef<HTMLInputElement>(null);
    const refController: React.MutableRefObject<AbortController|null> = useRef(null);

    const handleNameChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newName = evt.target.value;
        
        setName(newName);
    }
    const handleContactLinkChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newContactLink = evt.target.value;
        
        setContactLink(newContactLink);
    }
    const handleSubmit = async (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        const nameTrim = name.trim();
        const linkTrim = contactLink.trim();

        if (nameTrim.length < Vars.Name.MinLength) {
            setErrorName(`must be more then ${Vars.Name.MinLength} characters.`);
            refName.current?.focus();

            return;
        } else if (nameTrim.length > Vars.Name.MaxLength) {
            setErrorName(`cannot be more then ${Vars.Name.MaxLength} characters.`);
            refName.current?.focus();

            return;
        }

        if (!/^[a-zA-Z0-9\s']+$/.test(nameTrim)) {
            setErrorName(`only allow english letters and numbers.`);
            refName.current?.focus();

            return;
        }

        for (let each of nameTrim.split(/\s+/)) {
            if (profaneWords.includes(each.toLowerCase())) {
                setErrorName('cannot contains profane words.');
                refName.current?.focus();

                return;
            }
        }

        setErrorName(undefined);

        if (linkTrim !== '') {
            if (linkTrim.startsWith('http://') || linkTrim.startsWith('https://')) {
                const afterHttp = linkTrim.startsWith('http://') ? linkTrim.replace('http://', '') : linkTrim.replace('https://', '');

                if (afterHttp === '') {
                    setErrorContactLink('after http must have some words.');
                    refContactLink.current?.focus();

                    return;
                } else if (afterHttp.length > Vars.Link.MaxLength) {
                    setErrorName(`cannot be more then ${Vars.Link.MaxLength} characters.`);
                    refContactLink.current?.focus();

                    return;
                }
            } else {
                setErrorContactLink('must start with http:// or https://');
                refContactLink.current?.focus();
    
                return;
            }
        }

        setErrorContactLink(undefined);
        setShow(false);

        refController.current?.abort();
        refController.current = new AbortController();

        const updating = new Promise(async (resolve, reject) => {
            const res = await fetch('/api', {
                method: 'POST',
                signal: refController.current?.signal,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameTrim,
                    link: linkTrim
                })
            });
    
            const data: boolean = await res.json();
    
            if (data) {
                onSuccessUpdate({
                    name: nameTrim,
                    link: linkTrim
                });
                resolve(data);
            } else {
                reject();
            }
        });

        toast.promise(updating, {
            loading: 'Updating...',
            success: <p className='text-[14px]'>Updated successfully!</p>,
            error: <p className='text-[14px]'>Failed to update.</p>,
        }, {
            position: 'top-right',
            duration: 3000,
            style: {
                background: 'transparent',
                color: '#eee'
            }
        });
    }

    useEffect(() => {
        return () => {
            refController.current?.abort();
        }
    }, []);

    return (
        <div
            className={Classes.Section}>
            <div
                className="
					w-full max-w-[78rem] flex justify-center px-2.5
				">
                <div
                    className='
                        w-full flex flex-col items-center text-[14px]
                    '>
                    
                    {
                        show === false &&
                        <button
                            className='
                                underline underline-offset-4
                            '
                            onClick={() => setShow(true)}>
                            update last visitor
                        </button>
                    }
                    {
                        show &&
                        <div
                            className='
                                w-full h-[1px] bg-light max-w-[700px] opacity-40 mb-3
                                sm:mb-6
                                md:mb-14
                                lg:mb-16
                            '>
                        </div>
                    }
                    {
                        show &&
                        <form
                            className='
                                w-full max-w-[500px] flex flex-col items-center gap-y-[10px] px-5
                                md:px-10
                            '>
                            <div
                                className='
                                    w-full flex items-center justify-between gap-x-2
                                '>
                                <p>
                                    Please input your information.
                                </p>
                                <button
                                    type='button'
                                    className='
                                        text-[16px] p-2 opacity-75 transition-opacity
                                        hover:opacity-100
                                    '
                                    onClick={() => setShow(false)}>
                                    x
                                </button>
                            </div>
                            <div
                                className="
                                    w-full mb-4 flex flex-col gap-6
                                ">
                                <div>
                                    <div className="mb-2 text-sm font-medium flex items-start ">
                                        <label
                                            htmlFor="name"
                                            className={Class.Label}>
                                            Name:&nbsp;
                                        </label>
                                        {
                                            errorName !== undefined &&
                                            <Error
                                                message={errorName}
                                            />
                                        }
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        ref={refName}
                                        autoComplete="off"
                                        spellCheck={false}
                                        className={Class.Input}
                                        value={name}
                                        onChange={handleNameChanged}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 text-sm font-medium flex items-start ">
                                        <label
                                            htmlFor="contact"
                                            className={Class.Label}>
                                            Contact link:&nbsp;
                                        </label>
                                        {
                                            errorContactLink !== undefined &&
                                            <Error
                                                message={errorContactLink}
                                            />
                                        }
                                    </div>
                                    <input
                                        type="text"
                                        id="contact"
                                        autoComplete="off"
                                        spellCheck={false}
                                        ref={refContactLink}
                                        className={Class.Input}
                                        value={contactLink}
                                        onChange={handleContactLinkChanged}
                                    />
                                </div>
                            </div>
                            <div
                                className="
                                    w-full my-2 flex justify-end
                                ">
                                <button
                                    type="submit"
                                    className="
                                        w-fit px-4 py-2 lg:px-5 lg:py-2.5 bg-blue-600/90 transition hover:bg-blue-700 text-white text-sm rounded-md
                                    "
                                    onClick={handleSubmit}>
                                    Save
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default UpdateVisitor;