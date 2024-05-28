import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsCoin } from "react-icons/bs";

import { MdOutlineInfo } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Modal from '../Modal/Modal';

const CustomSwiper = ({
    item = [],
    spaceBetween,
    slidesPerView = 1,
    pagination,
    scrollbar,
    navigation,
    modern
}) => {
    const [Coin, setCoin] = useState(0)
    const handleBuyButtonClick = (itemData) => {
        savePurchaseToLocalStorage(itemData);
    };
    const savePurchaseToLocalStorage = (itemData) => {
        const existingPurchases = JSON.parse(localStorage.getItem('purchases')) || [];
        existingPurchases.push(itemData);
        localStorage.setItem('purchases', JSON.stringify(existingPurchases));
    };
    const swiperProps = {
        spaceBetween: spaceBetween || 30,
        slidesPerView: slidesPerView,
        navigation: navigation ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false,
        pagination: pagination ? { clickable: true } : false,
        scrollbar: scrollbar ? { draggable: true } : false,
        autoplay: { delay: 1000 },
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log('slide change'),
    };

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            {...swiperProps}
        >
            {item.map((itemData, id) => (
                modern ?
                    <SwiperSlide key={id} className="active:scale-90 shadow-2xl w-full min-h-[105px] shadow-red-700 rounded-2xl group relative">
                        <div className='w-full h-full relative overflow-hidden rounded-2xl'>
                            <div className="tooltip shadow-xl shadow-fuchsia-500 glass w-full h-full absolute top-0 overflow-hidden left-0 z-0 bg-slate-950 rounded-2xl"></div>
                            <div className="min-h-[173px] min-w-[173px] flex items-center justify-center w-full  hover:scale-105 shadow-inner shadow-fuchsia-500 border-b-2 border-fuchsia-500 rounded-2xl  duration-150 relative h-full bg-transparent">
                                <div>
                                    <div className='relative bottom-1 right-2'>                      
                                        <img className="w-full h-full rounded-2xl object-contain max-w-[150px] max-h-[150px]" src={itemData.img} alt={`Slide ${id}`} />
                                    </div>
                                    <div className='border hover:hidden cursor-pointer border-yellow-500 rounded-lg absolute right-[20px] bottom-1 flex items-center gap-1 text-yellow-500 font-bold px-2`'>
                                        <BsCoin className='ml-2' />
                                        <span className='mr-2'>{itemData.price.price}</span>
                                    </div>
                                </div>
                                <div className='shadow-custom opacity-50 absolute top-0 left-0 h-1 w-1 rounded-full z-40 '></div>
                                <div className='shadow-custom opacity-60 absolute bottom-0 right-0 h-1 w-1 rounded-full z-40'></div>
                                <div className='absolute top-0 left-96 w-full h-full flex flex-col justify-between z-50 bg-slate-800 bg-opacity-65 text-white text-xs group-hover:left-0 p-5 '>
                                    <div className='flex flex-col'>
                                    <div className="tooltip tooltip-left relative bottom-2 left-[90%]" data-tip={itemData.type}>
                                        <button className="w-5 flex items-center justify-center bg-transparent">
                                            <MdOutlineInfo className='text-2xl drop-shadow-none shadow-none rounded-full' />
                                        </button>
                                    </div>
                                        <p>Type:{itemData.type}</p>
                                        <p>Coin: {itemData.price.price}</p>
                                        <p>Created: {itemData.createdDate}</p>
                                    </div>
                                    <div className=''>
                                        <button onClick={Coin > itemData.price.price ? Modal("Bekzod krasavchik", 'succes') : Modal("Bekzod not Krasavchik", "warning")} className='w-full py-2 bg-amber-400 rounded-lg font-bold flex items-center gap-4 justify-center flex-row-reverse'>
                                            <span>Buy</span>
                                            <BsCoin className='text-2xl font-semibold' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    :
                    <SwiperSlide key={id} className="rounded-3xl overflow-hidden w-full">
                        <img className="w-full h-full max-w-screen-xl rounded-3xl object-contain" src={window.env.REACT_IMAGE_URL + itemData.image} alt={`Slide ${id}`} />
                    </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CustomSwiper;
