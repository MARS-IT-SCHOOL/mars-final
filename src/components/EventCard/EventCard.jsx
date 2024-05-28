import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EventCard = () => {
    const theme = useSelector(state => state.theme);

    return (
        <div className='w-full rounded-2xl drop-shadow-lg h-72 flex flex-col justify-center relative overflow-hidden' data-theme={theme}>
            <div className='absolute top-0 left-0'>
                <img src="https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg" className='w-full h-full object-cover object-center' alt="" />
            </div>
            <div className="z-10 bg-slate-950 bg-opacity-75 w-full h-full flex justify-center flex-col px-5">
                <p className='text-3xl font-mono '>Figma Event</p>

                <p className='py-5 text-sm text-opacity-75 text-slate-300'>Каждую неделю сделав фигма макет используя HTML CSS JS, получайте MMC коины! (JS не обьязательно!)</p>

                <Link to='/dashboard/FigmaEvent' className='py-2 px-4 rounded-lg  max-w-[35%] text-sm flex items-center justify-center bg-amber-400  text-white' >Участвовать</Link>
            </div>
        </div>
    )
}

export default EventCard