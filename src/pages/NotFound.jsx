import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
        <div className='flex items-center h-screen justify-center w-full flex-col gap-10'>
            <h1 className='text-7xl'>404</h1>
            <p className='text-3xl'>Page Not Found in Space :D</p>
            <Link to='/' className='underline '>back to Home page</Link>
        </div>
  )
}

export default NotFound
