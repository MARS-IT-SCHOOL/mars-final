import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../actions/themeActions';
import BgMusic from '../music/BgMusic.mp3';

const Settings = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme); // Update to correct theme slice
  const [volume, setVolume] = useState(25);
  const audioRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  const bg = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro',
    'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 
    'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business',
    'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset',
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <main className={`glass w-full p-5 h-[97vh] shadow-lg rounded-2xl overflow-y-auto ${currentTheme}`}>
      <div className="dropdown flex justify-end">
        <div tabIndex={0} role="button" className="btn m-1 rounded-lg">
          Themes
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] flex gap-5 flex-wrap p-2 bg-base-100 shadow-inner shadow-slate-700 py-5 px-10 w-full rounded-box">
          {bg.map((item, index) => (
            <li data-theme={item} onClick={() => handleThemeChange(item)} key={index} className='flex-1 py-2 min-w-[230px] shadow-inner shadow-slate-400 rounded-lg acitve:scale-105 transition-all'>
              <a
                href="#"
                tabIndex={0}
                role="button"
                className={`px-4 py-2 ${item === currentTheme ? 'font-bold' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="settings flex flex-col gap-3 max-w-[600px] w-[100%]">
        {/* Your other settings inputs here */}
        <div className="form-control">
          <label className="flex gap-5">
            <span>Music:</span> 
            <input onClick={togglePlay} type="checkbox" className="toggle"/>
          </label>
          <label className="">
            <span>Volume:</span> 
            <input 
              type="range" 
              min={0} 
              max={100} 
              value={volume} 
              className="range" 
              step={25} 
              onChange={handleVolumeChange} 
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </label>
          <audio
            ref={audioRef}
            src={BgMusic}
            loop
          />
        </div>
      </div>
    </main>
  );
};

export default Settings;
