import React from 'react';

const BackgroundMusic = ({ bgMusicPlaying, bgMusic }) => {
  return (
    <>
      {bgMusicPlaying && (
        <audio autoPlay loop>
          <source src={bgMusic} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  );
};

export default BackgroundMusic;
