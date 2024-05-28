import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineHome } from "react-icons/md";
import { BiJoystick } from "react-icons/bi";
import { IoStatsChartOutline, IoSettingsOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import SoundEffect from '../../sounds/ClickSound.jsx';
import ClickSound from '../../sounds/SoundOfClick.mp3';
import Logo from '../../assets/images/logo.png';
import RoundedChart from '../Others/Charts/chartSidebar';

const Sidebar = ({ theme, setTheme }) => {
    const [text, setText] = useState("");
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleThemeChange = (newTheme, newText) => {
        setTheme(newTheme);
        setText(newText);
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Воспроизвести звуковой файл
        // Например, this.audio.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Остановить воспроизведение звука
        // Например, this.audio.pause();
    };

    const handleLinkClick = (link) => {
        // Additional logic if needed
    };

    const linkData = [
        { to: '/dashboard/home', label: 'Home', icon: <MdOutlineHome />, key: '/' },
        { to: '/dashboard/games', label: 'Mars Games', icon: <BiJoystick />, key: '/games' },
        { to: '/dashboard/statistics', label: 'Statistics', icon: <IoStatsChartOutline />, key: '/statistics' },
        { to: '/dashboard/leaderBoard', label: 'LeaderBoard', icon: <TfiCup />, key: '/leaderBoard' },
        { to: '/dashboard/settings', label: 'Settings', icon: <IoSettingsOutline />, key: '/settings' }
    ];

    return (
        <aside className='h-screen w-full max-w-[15%] max-h-[95vh]'>
            <div className='h-full rounded-2xl overflow-hidden flex flex-col justify-between'>
                <div className='max-h-[81px] h-full flex rounded-2xl items-center justify-center'>
                    <img src={Logo} className='w-full max-w-[150px]' alt='Logo' />
                </div>

                <div className='flex flex-col gap-2 font-mono font-bold'>
                    <SoundEffect />
                    {linkData.map((link) => (
                        <Link
                            key={link.key}
                            to={link.to}
                            onClick={() => handleLinkClick(link.key)}
                            className={`sidebar-link flex items-center gap-2 pl-16 w-full py-2 px-5 rounded-e-full hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-red-700 transition duration-500 ${currentPath === link.to ? 'shadow-inner shadow-red-200 bg-gradient-to-r from-red-500 via-red-600 to-red-700' : ''}`}
                            >
                            {link.icon}
                            <span>{link.label}</span>
                            <audio src={ClickSound}></audio>
                        </Link>
                    ))}
                </div>

                <div className='px-2'>
                    <div className='text-center py-2 px-4 h-full bg-white relative rounded-3xl font-mono shadow-inner shadow-violet-500'>
                        <p className='text-xl font-bold mb-5 text-violet-700'>Today's Coins</p>
                        <div className='flex items-center justify-center mb-4'>
                            <RoundedChart />
                        </div>
                        <p className='font-semibold text-violet-500'>Finish today's program and get</p>
                        <p className='font-semibold text-violet-500'>
                            <span>10 MMC</span>
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
