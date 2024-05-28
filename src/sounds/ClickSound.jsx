import React, { useRef, useEffect, useState } from 'react';
import ClickSound from './SoundOfClick.mp3';

const SoundEffect = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.error("Failed to play sound:", error));
        }
    };

    useEffect(() => {
        if (isPlaying) {
            playSound();
            setIsPlaying(false);
        }
    }, [isPlaying]);

    return (
        <audio ref={audioRef} preload="auto" onEnded={() => setIsPlaying(false)}>
            <source src={ClickSound} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default SoundEffect;
