import React, { useState } from 'react'

const ChartSidebar = () => {
    const [progressLine, setProgress] = useState("64")

    return (
        <>
            <div className="radial-progress text-center text-violet-700 text-2xl w-[100px] h-[100px] shadow-inner shadow-violet-300" style={{ "--value": progressLine }} role="progressbar">
                <p className='text-violet-700 font-bold text-2xl'>{progressLine}%</p>
                <p className='text-opacity-60 text-xs'>of 100</p>
            </div>

            <div className='w-3 h-3 bg-violet-700 shadow-2xl shadow-violet-700 absolute top-[22%] left-7 rounded-full border border-violet-600'>
                <div className='bg-violet-700 shadow-inner shadow-violet-300 w-full h-full rounded-full'></div>
            </div>

            <div className='w-3 h-3 bg-violet-700 shadow-2xl shadow-violet-700 absolute top-[29%] right-7 rounded-full border border-violet-600'>
                <div className='bg-violet-700 shadow-inner shadow-violet-300 w-full h-full rounded-full'></div>
            </div>

            <div className='w-3 h-3 bg-violet-700 shadow-2xl shadow-violet-700 absolute bottom-[29%] right-7 rounded-full border border-violet-600'>
                <div className='bg-violet-700 shadow-inner shadow-violet-300 w-full h-full rounded-full'></div>
            </div>

            <div className='w-3 h-3 bg-violet-700 shadow-2xl shadow-violet-700 absolute bottom-[44%] left-7 rounded-full border border-violet-600'>
                <div className='bg-violet-700 shadow-inner shadow-violet-300 w-full h-full rounded-full'></div>
            </div>
        </>
    )
}

export default ChartSidebar