import React, { useState, useEffect } from 'react'
import CustomSwiper from '../components/Others/Swiper/Swiper'
import { useSelector } from 'react-redux';
import SpecialOfferCard from '../components/Others/SaleCard/SpecialOfferCard';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'



const Shop = () => {
  const { cases, personages, loading, error } = useSelector(state => state.shop);

  const [heroes, setHeroes] = useState([]);
  const [skins, setSkins] = useState([]);
  const [heroRarity1, setHeroRarity1] = useState("Редкий");
  const [heroRarity2, setHeroRarity2] = useState("Эпический");

  const [startTimestamp, setStartTimestamp] = useState(localStorage.getItem('startTimestamp') || new Date().getTime());
  const [endTimestamp, setEndTimestamp] = useState(localStorage.getItem('endTimestamp') || new Date().getTime() + 24 * 60 * 60 * 1000);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const timeDifference = endTimestamp - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  console.log(setSkins)

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // Decrease minutes and reset seconds
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Decrease hours and reset minutes
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
          } else {
            // Decrease days and reset hours
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
            } else {
              // Clear interval when countdown is complete
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('startTimestamp', startTimestamp);
    localStorage.setItem('endTimestamp', endTimestamp);
  }, [startTimestamp, endTimestamp]);

  const navigate = useNavigate();
  
  return (
    <main className='w-full p-5 h-[97vh] shadow-lg rounded-2xl overflow-y-auto glass'>
        <div>
          <button data-theme onClick={() => navigate(-1)} className="flex gap-1 items-center px-6 py-2 rounded-lg">
            <IoMdArrowRoundBack className='text-2xl'/>
            Go back
          </button>
        </div>
        <div>
            <p className='text-2xl font-semibold text-center mb-5 cursor-pointer'>Heroes</p>
            <div>
                <CustomSwiper item={personages} slidesPerView={6} spaceBetween={30} pagination={false} scrollbar={false} navigation={false} modern={true} />
            </div>
        </div>
        <div className='mt-5'>
          <p className='text-2xl font-semibold text-center mb-5 cursor-pointer'>Special offers</p>
          <div className='flex gap-3 mt-5'>
          <SpecialOfferCard heroRarity={heroRarity1} days={days} hours={hours} minutes={minutes} seconds={seconds} />
          <SpecialOfferCard heroRarity={heroRarity2} days={days} hours={hours} minutes={minutes} seconds={seconds} />
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-2xl font-semibold text-center mb-4 cursor-pointer'>Cases</p>
          <div className='mt-8 flex items-center justify-center'>
            <CustomSwiper item={cases} slidesPerView={4} spaceBetween={30} pagination={false} scrollbar={false} navigation={false} modern={true} />
          </div>
        </div>
    </main>
  )
}

export default Shop
