import Vars from '@/constants/vars';
import Any from '@soatra/any';
import React from 'react';

const Footer = () => {
    return (
        <div
            className='
                w-full flex justify-center
            '>
            <Any
                as='p'
                className='
                    text-[10px] text-center
                '
                from="opacity-0"
                to={[
                    {
                        state: 'opacity-100',
                        duration: Vars.Duration,
                        easing: Vars.Easing,
                    }
                ]}>
                This portfolio is updated in 2024.
            </Any>
        </div>
    );
}

export default Footer;