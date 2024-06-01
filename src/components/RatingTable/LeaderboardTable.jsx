import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';


const LeaderboardTable = ({ data }) => {
  let [count, setCount] = useState(1)
  console.log("leaderboard data:", data)
  return (
    <div className='py-2 px-5 border-2 rounded-lg w-full'>
      <h1>Leaders Dashboard</h1>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="w-full h-full max-h-[350px]"
      >
        <SwiperSlide className={"h-auto text-sm p-[30px]"}>

          {data.map((item, id) => (
            // raqam img (ism clanname) (MMC , mars coin) (level rank)
            <div className="flex items-center gap-2 py-2 " key={id}>

              <div className='flex-1 max-w-[50px]'>
                <p> {count++} </p>
              </div>
              <div className='flex-1 max-w-[50px]'>
                <img src={item.images.userimage} className='size-14 rounded-full' alt="" />
              </div>
              <div className='flex-1 '>
                <p> {item.username} </p>
                <p></p>
              </div>
              <div className='flex-1 '> <p> {item.rank} </p> </div>
              <div className='flex-1 '> <p> {item.level} </p></div>
              <div className='flex-1 '> <p> {item.exp_user} </p> </div>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default LeaderboardTable

// clan info
// MARS MINI COIN
// MARS COIN