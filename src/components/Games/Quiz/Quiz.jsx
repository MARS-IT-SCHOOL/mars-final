import { useState } from 'react';
import CongritulationAnim from '../../Others/Animation/CongritulationAnim';
import Stats from '../../Others/StatsUser/Stats';
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function Quiz() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [question, setQuestion] = useState([
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },
        {
            question: "Amit Temur hotini nechta bolgan?",
            variants: [
                { quiz: "3ta", isTrue: true },
                { quiz: "2ta", isTrue: false },
                { quiz: "1ta", isTrue: false },
                { quiz: "10ta", isTrue: false }
            ]
        },

        {
            question: "1 - Jahon urishi nechanchi yilda bolgan?",
            variants: [
                { quiz: "1914", isTrue: true },
                { quiz: "1917", isTrue: false },
                { quiz: "1941", isTrue: false },
                { quiz: "1944", isTrue: false }
            ]
        }
    ]);
    const [congritulation, setCongritulation] = useState(false);

    const handleCongritulation = () => {
        setCongritulation(true);
        setTimeout(() => {
            setCongritulation(false);
        }, 10000);
    };

    const nextQuest = (itemIndex) => {
        if (question[count].variants[itemIndex].isTrue) {
            setCorrectCount((prev) => prev + 1);
            handleCongritulation();
        }
        setCount((prev) => prev + 1);
    };

    return (
        <>
            <div className='max-w-[80%] mx-auto'>
                <button data-theme onClick={() => navigate(-1)} className="flex items-center text-center  gap-1 px-6 py-2 rounded-lg mt-4 bg-black border-2 border-info opacity-75 text-info shadow-lg shadow-blue-400 hover:bg-blue-900 hover:shadow-blue-500 text-lg font-medium animate-pulse">
                    <IoMdArrowRoundBack className='text-1xl text-center ' />
                    Go back
                </button>
            </div>


            <div
                className='absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]'
                style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/60/26/26/360_F_560262652_SMg7tie3Zii0zFT9LYkKMqrNrPcU5owB.jpg')" }}
            >

            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]'></div>
            {
                count >= question.length
                    ?
                    <div className="relative z-10 container max-w-[80%] mx-auto py-8 text-center text-white text-3xl">

                        <Stats correctCount={correctCount} totalQuestions={question.length} />
                    </div>
                    :
                    <div>
                        {congritulation && <CongritulationAnim />}
                        <div className='relative z-10 container max-w-[80%] mx-auto py-8'>
                            <div className='border border-blue-300 rounded-lg'>
                                <div className="navbar glass text-primary-content rounded-lg py-10 px-10 flex-col gap-5 shadow-lg shadow-blue-400 ">
                                    <p className='btn btn-ghost text-blue-700 font-mono text-3xl flex items-center justify-center'>Quiz question</p>
                                    <p className='text-blue-500 font-mono text-2xl animate-pulse'>{question[count].question}</p>
                                </div>
                            </div>
                            <div>
                                <div className='mb-8 mt-20'>
                                    <div className="flex gap-10 flex-wrap">
                                        {question[count].variants.map((variant, index) => (
                                            <button
                                                key={index}
                                                className={`group hover:bg-blue-900 hover:shadow-blue-300 border border-blue-300 flex-1 min-w-[40%] card glass bg-slate-900 place-items-center font-mono rounded-lg bg-opacity-80 text-white shadow-blue-300 shadow-md`}
                                                onClick={() => nextQuest(index)}
                                            >
                                                <div className='px-10 shadow-inner w-full h-full flex py-10 gap-10 group-hover:text-blue-300 shadow-white group-hover:shadow-blue-300 rounded-lg'>
                                                    <span>{String.fromCharCode(65 + index)}</span>
                                                    <span>{variant.quiz}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default Quiz;
