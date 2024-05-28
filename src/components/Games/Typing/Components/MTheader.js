import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function MTheader() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between'>
            <div className='text-white flex'>
                <Link id="logo" to="/" className='items-center'>
                    {/* <img className='items-center' src={require('./image/ChaosCrab.png')} alt='chaos logo' width={50}></img> */}
                </Link>

                <Link data-theme="true" onClick={() => navigate(-1)} className='absolute top-10 left-10 flex gap-1 items-center px-6 py-2 rounded-lg'>
                    <p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v .4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path></svg></p>
                    Go back
                </Link>

                <div className='flex flex-col pl-2'>
                    <div className='top'></div>
                    <h1 className='text-3xl mt-1'>marstyping</h1>
                </div>

                <nav className='grid grid-flow-col auto-cols-max gap-2 pt-2'>
                    <div className='container-lg bg-pastel-100 size-9 rounded-lg pt-1.5 ml-3'>
                        <Link to="/" className='text-black pl-2'>
                            <i className='fa-solid fa-md fa-keyboard Ani duration-400'></i>
                        </Link>
                    </div>

                    <div className='container-lg bg-pastel-200 size-9 rounded-lg pt-1.5'>
                        <Link to="/" className='text-black pl-2.5 '>
                            <i className='fa-solid fa-md fa-gear Ani duration-400'></i>
                        </Link>
                    </div>
                </nav>  

            </div>
            
            <Link to="/Login" className='mt-4 text-slate-500'>
                <i className='fa-regular fa-user Ani duration-400'></i>
            </Link>

            <div className='hidden'>
                <Link to="/Account" className='m-4 p-3 text-slate-500 bg-chaosPink rounded-lg'>
                    <i className='fa-regular fa-user Ani duration-400 pr-2'></i>
                    Hon
                </Link>

                <Link to="/Login" className='mt-4 text-slate-500'>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
            </div>

        </div>
    );
}

export default MTheader;
