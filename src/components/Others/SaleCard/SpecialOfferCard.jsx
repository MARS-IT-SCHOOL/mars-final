import React, { useEffect, useState } from 'react';
import { TbCoins } from 'react-icons/tb';
import { MdOutlineInfo } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";




const SpecialOfferCard = ({ heroRarity, days, hours, minutes, seconds }) => {

  const getShadowColor = (rarity) => {
    switch (rarity) {
        case "Редкий":
          return "shadow-green-500 text-green-500 border-geen-700 text-custom-rare"; 
        case "Эпический":
          return "shadow-red-500 text-red-500 border-red-700 text-custom-epic" 
        case "Мифический":
          return "shadow-fuchsia-600 text-fuchsia-600 border-fuchsia-700 text-custom-mythic";
        case "Легендарный":
          return "shadow-yellow-500 text-yellow-500 border-yellow-700 text-custom-legend"; 
        default:
          return "shadow-green-500 text-green-500 border-geen-700 text-custom-rare";
      }
  };

  const getBgColor = (rarity) => {
    switch (rarity) {
        case "Редкий":
          return "bg-green-500"; 
        case "Эпический":
          return "bg-red-500" 
        case "Мифический":
          return "bg-fuchsia-600";
        case "Легендарный":
          return "bg-yellow-500"; 
        default:
          return "bg-green-500";
      }
  };

  return (
    <div className={`flex-1 shadow-xl ${getShadowColor(heroRarity)} border-2 rounded-2xl overflow-hidden drop-shadow relative group`}>
              <div className={`relative flex justify-between w-full bg-zinc-800 shadow-inner ${getShadowColor(heroRarity)} p-5 rounded-lg`}>
              <div className={`w-52 h-52 ${getBgColor(heroRarity)} bg-opacity-55 absolute -bottom-24 -right-24 rounded-full shadow drop-shadow-xl group-hover:animate-bounce no-animation shadow-fuchsia-100`}></div>
                <div className='max-w-[320px] w-2/3 flex flex-col justify-between'>
                  <div className='flex justify-between w-full items-start flex-col gap-2 '>
                    <span className={`${getShadowColor(heroRarity)} font-bold drop-shadow-2xl text-custom text-xs`}>Daily giveawa0y</span>
                    <span className={`${getShadowColor(heroRarity)} font-bold drop-shadow-2xl text-custom text-2xl group-hover:scale-110`}>Alucard</span>
                    <div className="flex">
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                      <div className={`flex flex-col p-2 bg-neutral min-w-14 text-xs rounded-box items-center glass ${getShadowColor(heroRarity)}  shadow-md`}>
                        <span className="countdown font-mono text-xl">
                          <span style={{"--value":days}} className='text-center block'>{days}</span>
                        </span>
                        days
                      </div> 
                      <div className={`flex flex-col p-2 bg-neutral min-w-14 text-xs rounded-box items-center glass ${getShadowColor(heroRarity)} shadow-md`}>
                        <span className="countdown font-mono text-xl">
                          <span style={{"--value":hours}} className='text-center block'></span>
                        </span>
                        hours
                      </div> 
                      <div className={`flex flex-col p-2 bg-neutral min-w-14 text-xs rounded-box items-center glass ${getShadowColor(heroRarity)} shadow-md`}>
                        <span className="countdown font-mono text-xl text-center">
                          <span style={{"--value":minutes}} className='block'>{hours}</span>
                        </span>
                        min
                      </div> 
                      <div className={`flex flex-col p-2 bg-neutral min-w-14 text-xs rounded-box items-center glass ${getShadowColor(heroRarity)} shadow-md`}>
                        <span className="countdown font-mono text-xl">
                          <span style={{"--value":seconds}} className='text-center block'>{minutes}</span>
                        </span>
                        sec
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className={`hover:bg-zinc-900 duration-300 border-[2px] px-4 py-2 rounded-lg flex justify-between bg-opacity-35 cursor-pointer text-sm shadow-md ${getShadowColor(heroRarity)}`}>
                      <sup className='line-through text-xs animate-pulse flex gap-1 items-center'>
                        <TbCoins />
                        1072 MMC
                      </sup>
                      <HiCursorClick className='text-2xl'/>
                      <span className='ml-2 text-lg animate-pulse flex gap-1 items-center'>
                        <TbCoins />
                        772 MMC
                      </span>
                  </div>
                </div>
                <div className='w-1/3'>
                  <div className="absolute top-1 right-1 z-[99]">
                    <div className="tooltip tooltip-left" data-tip={heroRarity}>
                      <button className="w-10 h-10 flex items-center justify-center bg-transparent">
                        <MdOutlineInfo className='text-2xl drop-shadow-none shadow-none rounded-full' />
                      </button>
                    </div>
                  </div>
                  <img className='max-w-[150px] relative z-50 group-hover:scale-110 group-hover:transition-all group-hover:duration-700' src={'https://www.pngitem.com/pimgs/b/162-1626564_mobile-lagend-skin-alucard-epic-png-download-alucard.png'} alt="" />
                </div>
              </div>
    </div>
  );
};

export default SpecialOfferCard;
