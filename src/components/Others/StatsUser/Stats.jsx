import React from 'react';
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import CounterText from '../../../services/counterText/CounterText';

const Stats = ({ correctCount, totalQuestions }) => {
    const navigate = useNavigate();
    return (


        <div className='shadow-lg shadow-blue-400 rounded-2xl '>
            <div className=' rounded-2xl opacity-80 bg-black filter shadow-inner shadow-blue-300 w-full h-full'>
                <div className="stats flex py-5 bg-transparent border-2 border-blue-500 ">
                    <div className="stat">
                        <div className="stat-figure text-primary"></div>
                        <div className="stat-title animate-pulse text-blue-600 font-bold font-mono">Correct Answer</div>
                        {
                            correctCount >= 8 ?
                                <div className="stat-value text-emerald-500 font-medium  font-mono text-3xl  flex gap-2 items-center justify-center"><CounterText max={correctCount} duration={2} /> / <span className=''>{totalQuestions}</span></div>
                                :
                                <div className="stat-value text-primary font-medium  font-mono text-3xl  flex gap-2 items-center justify-center"><CounterText max={correctCount} duration={2} /> / <span className=''>{totalQuestions}</span></div>
                        }
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary"></div>
                        <div className="stat-title animate-pulse text-blue-600 font-bold font-mono">Grade</div>
                        <div className="stat-value font-medium text-primary  font-mono text-2xl">{correctCount > 8 ? <span className='text-emerald-400 uppercase'>Good job</span> : <span>NOT BED</span>}</div>

                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value animate-bounce text-blue-600 font-mono text-2xl flex items-center justify-center"><CounterText max={Math.round((correctCount / totalQuestions) * 100)} duration={3}></CounterText>%</div>
                        <div className="stat-title text-primary  font-mono text-2xl ">{correctCount === totalQuestions ? <span className='text-emerald-500'>Done</span> : "NOT DONE"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
