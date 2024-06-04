// Hangman.js
import React from 'react';

const HangmanImg = ({ wrongGuesses }) => {
  const hangmanParts = [
    { key: 'head', style: { width: '40px', height: '40px', borderRadius: '100px', backgroundColor: 'aqua', position: 'absolute', top: '31px', left: '42px' } }, // head
    { key: 'body', style: { width: '8px', height: '60px', backgroundColor: 'aqua', position: 'absolute', top: '69px', left: '58px' } }, // body
    { key: 'leftArm', style: { width: '50px', height: '8px', backgroundColor: 'aqua', position: 'absolute', top: '75px', left: '20px', transform: 'rotate(45deg)' } }, // left arm
    { key: 'rightArm', style: { width: '50px', height: '8px', backgroundColor: 'aqua', position: 'absolute', top: '75px', left: '54px', transform: 'rotate(-45deg)' } }, // right arm
    { key: 'leftLeg', style: { width: '50px', height: '8px', backgroundColor: 'aqua', position: 'absolute', top: '139px', left: '20px', transform: 'rotate(130deg)' } }, // left leg
    { key: 'rightLeg', style: { width: '50px', height: '8px', backgroundColor: 'aqua', position: 'absolute', top: '139px', left: '54px', transform: 'rotate(-130deg)' } }, // right leg
  ];

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        
        <div className=' h-48 w-3 bg-teal-500 shadow-2xl shadow-teal-500 relative left-[140px] rounded-lg bottom-1'></div>
        <div className=' h-3 w-48 bg-teal-500 shadow-2xl shadow-teal-500 relative bottom-[100px] rounded-lg left-[80px]'></div>
        <div className=' h-14 w-2 bg-teal-500 shadow-2xl shadow-teal-500 absolute bottom-[140px] rounded-lg left-[282px]'></div>
        <div className='h-3 w-28  bg-teal-500 shadow-2xl shadow-teal-500 absolute top-[180px] rounded-lg left-[87px]'></div>

        <div style={{ position: 'relative', width: '120px', height: '180px' }}>
            {hangmanParts.slice(0, wrongGuesses).map(({ key, style }) => (
            <div key={key} style={{ ...style, borderRadius: '100px' }}></div>
            ))}
        </div>

    </div>

  );
};

export default HangmanImg;
