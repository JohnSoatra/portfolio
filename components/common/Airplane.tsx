'use client';
import { randomNumber } from '@/utils/number';
import React, { useEffect, useMemo, useState } from 'react';

const Animations = ['animate-fly-up', 'animate-fly-down'];

const Airplane = () => {
  const [animationIndex, setAnimationIndex] = useState<number | undefined>(undefined);
  const animationClassName = useMemo(() => animationIndex !== undefined ? Animations[animationIndex] : 'hidden', [animationIndex]);

  const changeAnimation = () => {
    setTimeout(() => {
      setAnimationIndex((index) => index === undefined ? 0 : Math.abs(index - 1));
    }, randomNumber(10000, 15000));
  }
  const handleAnimationEnd = () => {
    changeAnimation();
  }

  useEffect(() => {
    changeAnimation();
  }, []);

  return (
    <div className='w-full max-w-container h-full fixed top-0 left-1/2 -translate-x-1/2'>
      <div className={animationClassName} onAnimationEnd={handleAnimationEnd}>
        <div className="planeWrapper">
          <div className="planeBody">
            <div className="planeTail"></div>
            <div className="wingLeft"></div>
            <div className="wingRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airplane;
