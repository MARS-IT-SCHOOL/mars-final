import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Kirbiy from '../../assets/kirby.png'
import axios from 'axios';

const Slider = () => {

  const apiData = window.env.REACT_FAKE_API;
  const [data, setData] = useState([]);

  useEffect(() => {
    // Получение данных с помощью Axios при монтировании компонента
    axios.get(apiData)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
      autoplay={{
        delay: 2000,
        // disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      className="w-[50%]"
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='slider-card  z-[100] bg-[#9D52AE] p-4 rounded-xl w-[250px]'>
            <img src={Kirbiy} alt='' className='w-1/2 mx-auto' />
            <p className='text-center text-[26px] text-white'>{slide.fullname}</p>
            <div className='flex justify-between text-white'>
              <p>Coin: {slide.total.marscoin}</p>
              <p>Group: {slide.group.groupname}</p>
            </div>
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper >
  )
}

export default Slider