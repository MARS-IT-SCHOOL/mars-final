import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMdArrowRoundBack } from 'react-icons/io';

const QuizDirection = () => {
    const navigate = useNavigate();
    const [directions] = useState([
        { id: 1, title: 'REACT', description: 'Learn React' },
        { id: 2, title: 'JAVASCRIPT', description: 'Learn JavaScript' },
        { id: 3, title: 'FRONTEND', description: 'Learn Frontend' },
        { id: 4, title: 'BACKEND', description: 'Learn Backend' },
        { id: 5, title: 'DESIGN', description: 'Learn Design' },
    ]);

    return (
        <div className='max-w-[80%] mx-auto'>
            <button 
                data-theme 
                onClick={() => navigate(-1)} 
                className="flex mb-20 items-center text-center gap-1 px-6 py-2 rounded-lg mt-4 bg-black border-2 border-info opacity-75 text-info shadow-lg shadow-blue-400 hover:bg-blue-900 hover:shadow-blue-500 text-lg font-medium animate-pulse">
                <IoMdArrowRoundBack className='text-1xl text-center' />
                Go back
            </button>

            <div className='flex flex-wrap gap-4'>
                {directions.length > 0 ? (
                    directions.map((item) => (
                        <motion.div 
                            key={item.id} 
                            className='py-10 px-20 bg-info flex-1 rounded-box shadow-lg shadow-white w-[20%]'
                        >
                            <motion.img 
                                src={"./favicon.ico"} 
                                alt={`${item.title} logo`} 
                                animate={{ rotate: 360 }} 
                                transition={{ duration: 2 }} 
                            />
                            <motion.p>{item.title}</motion.p>
                            <motion.p>{item.description}</motion.p>
                        </motion.div>
                    ))
                ) : (
                    <div>
                        Directions not yet available
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuizDirection;
