import React from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Keyboard = ({ onClick, hidden }) => {
  if (hidden) {
    return null; // Return null to not render the component
  }

  return (
    <div className="flex max-w-[543px] flex-wrap gap-4 justify-center">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onClick(letter)}
          className="bg-red-700 bg-opacity-90 border border-orange-600 text-white py-3 px-7 flex justify-center w-full max-w-[50px] rounded-lg shadow-md hover:bg-red-600 shadow-red-500 font-bold text-2xl transition-colors"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
