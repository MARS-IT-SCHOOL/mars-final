import React from 'react'

const WeeklyEvents = () => {
  return (
    <div className='flex items-center h-screen justify-center w-full flex-col gap-10'>
            <h1 className='text-7xl'>Events</h1>
            <p className='text-3xl'>Here will be weekly events :D</p>
            <Link to='/dashboard/statistics' className='underline '>back to Home page</Link>
        </div>
  )
}

export default WeeklyEvents
