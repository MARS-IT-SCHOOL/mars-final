import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsCoin } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";
import { FaGun, FaUserGroup, FaRankingStar } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuSwords } from "react-icons/lu";
import { MdControlPoint, MdOutlineFlag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CounterText from "../services/counterText/CounterText";
import { GrVulnerability } from "react-icons/gr";

const Statistics = ({ userData }) => {
  const dispatch = useDispatch();
  const stateUser = useSelector(state => state.auth.user);
  const theme = useSelector(state => state.theme.theme);

  const getTextShadow = (rank) => {
    switch (rank) {
        case "Marsianin":
            return "0px 0px 20px rgb(255, 255, 255), 0px 0px 10px rgb(255, 255, 255), 0px 0px 50px rgb(255, 255, 255)";
        case "Junior Marsianin":
            return "0px 0px 20px rgb(173, 216, 230), 0px 0px 10px rgb(173, 216, 230), 0px 0px 50px rgb(173, 216, 230)";
        case "Strong Junior Marsianin":
            return "0px 0px 20px rgb(0, 0, 139), 0px 0px 10px rgb(0, 0, 139), 0px 0px 50px rgb(0, 0, 139)";
        case "Middle Marsianin":
            return "0px 0px 20px rgb(238, 130, 238), 0px 0px 10px rgb(238, 130, 238), 0px 0px 50px rgb(238, 130, 238)";
        case "Strong Middle Marsianin":
            return "0px 0px 20px rgb(148, 0, 211), 0px 0px 10px rgb(148, 0, 211), 0px 0px 50px rgb(148, 0, 211)";
        case "Senior":
            return "0px 0px 20px rgb(255, 105, 180), 0px 0px 10px rgb(255, 105, 180), 0px 0px 50px rgb(255, 105, 180)";
        case "TeamLead Marsianin":
            return "0px 0px 20px rgb(255, 0, 0), 0px 0px 10px rgb(255, 0, 0), 0px 0px 50px rgb(255, 0, 0)";
        default:
            return "";
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  console.log("Statistics:", stateUser);
  let Front = "Front"
  console.log(userData);
  return (
    <main  className="p-8 h-[90vh] shadow-lg drop-shadow-md  rounded-2xl overflow-y-auto">
      <div className=" flex grid-cols-1 items-center md:grid-cols-2 gap-8 flex-col">
        
        <div
          className="gap-6 flex-1 user-info shadow-lg flex-wrap shadow-fuchsia-600 flex justify-between max-w-[99%] mt-2 w-full py-8 px-12 rounded-lg"
        >
              <p className="font-bold text-2xl block w-full text-center border-b pb-2 border-fuchsia-400  ">User information</p>
          <div className="flex items-center gap-10">
            <div className="user-info-img">
              <img
                className="size-28 rounded-full w-full"
                src={stateUser.avatar.userimage}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 min-w-80">
              <div className="flex items-center gap-16">
                <div className="user-info-name flex items-center">
                  <div className="user-name">
                    <h2 className="text-3xl font-semibold font-mono text-white " style={{ textShadow: getTextShadow(stateUser.rank) }}>
                      {stateUser.nickname}
                    </h2>
                  </div>
                </div>
              </div>
              <p className="text-warning flex gap-2">
                <span>EXP: </span>
                <CounterText max={stateUser.exp_user} duration={3} />
              </p>
              <progress
                className="progress w-full h-4 bg-slate-600"
                value={stateUser.exp_user}
                max={1400 * stateUser.level}>
              </progress>
            </div>
          </div>

          <div className="flex justify-between h-full gap-3 flex-col">
            <p className="font-bold text-2xl ">Grading:</p>
            <p className="flex items-center gap-2">
              <span>Rank:</span>
              <span className={`font-mono text-amber-400 font-bold`} style={{ textShadow: getTextShadow(stateUser.rank) }}>{stateUser.rank}</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Level:</span>
              <span className={`font-mono text-amber-400 font-bold`} style={{ textShadow: getTextShadow(stateUser.rank) }}>
                <CounterText max={stateUser.level} duration={3} />   
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-wrap">
            <p className="font-bold text-2xl ">Wallet:</p>
            <div className="user-coin flex text-warning flex-1 min-w-40 border-warning  border-opacity-40 shadow-md shadow-warning items-center gap-2 border py-1 px-3 rounded-full">
              <BsCoin className="text-2xl font-semibold" />
              <CounterText max={stateUser.total.mini_coin} duration={3} />   
            </div>
            <div className="user-coin flex text-warning flex-1 min-w-40 border-warning  border-opacity-40 shadow-md shadow-warning items-center gap-2 border py-1 px-3 rounded-full">
              <BsCoin className="text-2xl font-semibold" />
              <CounterText max={stateUser.total.mars_coin} duration={3} />   
            </div>
          </div>

          
        </div>

        <div className=" flex-1 flex gap-4 max-w-[99%] py-3 w-full border-none">
          <div className="skill flex flex-1 items-center justify-center py-7 px-3 rounded-lg shadow-md shadow-fuchsia-600 gap-5">
            <div
              className="radial-progress text-fuchsia-800"
              style={{ "--value": 77 }}
            >
              <MdOutlineSpeed className="text-[35px] text-fuchsia-600" />
            </div>
            <div className="skill-text text-center">
              <p className="text-xl text-slate-500">Typing Speed</p>
              <small className="text-4xl font-bold ">95</small>
              <sup className="text-xl">wpm</sup>
            </div>
          </div>
          <div className="skill flex flex-1 items-center py-5 px-4 rounded-xl shadow-md shadow-fuchsia-600 gap-5 justify-center">
            <div
              className="radial-progress text-yellow-800"
              style={{ "--value": 65 }}
            >
              <BsCoin className="text-[35px] text-yellow-500 font-semibold" />
            </div>
            <div className="skill-text text-center">
              <p className="text-xl text-slate-500">Coins</p>
              <p className="text-4xl font-bold ">65</p>
            </div>
          </div>
        </div>

        <div className="clan flex flex-1 max-w-[99%] border-none py-3 w-full gap-16">
          <div className="clane-left flex-1">
            <div className="flex gap-4 rounded-xl shadow-lg shadow-fuchsia-500 hover:scale-105 duration-300 items-center justify-center py-2">
              <MdOutlineFlag className="text-3xl" />
              <h2 className="text-center text-2xl font-semibold ">ALLIANCE</h2>
            </div>
            <div className="clane-name flex py-4 mt-5 gap-4 flex-wrap justify-center items-center shadow-lg shadow-fuchsia-600 rounded-lg px-2">
              <img
                className="max-w-20 shadow-lg shadow-fuchsia-600 h-20 rounded-full w-full"
                src="https://i.pinimg.com/564x/14/db/27/14db2790941eb087dd2c1f38a6319a14.jpg"
                alt=""
              />
                <p className="text-lg text-center font-semibold">
                  Red Marsians
                </p>
            </div>
          </div>
          <div className="clane-center flex-1">
            <ul className="gap-4 flex felx-1 flex-col ">
              <li className="flex items-center py-2 px-10 shadow-lg shadow-fuchsia-500 hover:scale-105 duration-300 rounded-xl ">
                <div className="flex gap-3 items-center">
                  <HiMiniComputerDesktop className="font-semibold text-2xl" />
                  <p className="text-xl font-semibold">Direction - <span className="text-warning">{Front}</span></p>
                </div>
              </li>
              <li className="py-5 px-7 shadow-md shadow-fuchsia-600 rounded-xl ">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3 items-center">
                    <FaUserGroup className="text-lg" />
                    <p className="text-sm font-semibold">FRONT-826</p>
                  </div>
                  <div className="">
                    <p className=" text-sm text-slate-400">
                      <b className="">3</b>/5 Month
                    </p>
                  </div>
                </div>
                <progress
                  className="progress w-full h-3 bg-slate-600"
                  value="3"
                  max="5"
                ></progress>
              </li>
              <li className="py-3 px-7 shadow-md shadow-fuchsia-600 rounded-xl">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3 items-center ">
                    <LuSwords className="font-semibold text-lg" />
                    <p className="text-sm font-semibold">RED WARRIOR</p>
                  </div>

                  <div className="">
                    <p className=" text-sm text-slate-400">
                      <b className="">5</b>/10 lvl
                    </p>
                  </div>

                </div>
                <progress
                  className="progress w-full h-3 bg-slate-600"
                  value="5"
                  max="10"
                ></progress>
              </li>
              <li className="py-3 px-7 shadow-md shadow-fuchsia-600 rounded-xl ">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3 items-center ">
                    <MdControlPoint className="font-semibold text-xl" />
                    <p className="text-sm font-semibold">POINTS</p>
                  </div>
                  <div className="">
                    <p className=" text-sm text-slate-400">
                      <b className="">122</b>/250 XP
                    </p>
                  </div>
                </div>
                <progress
                  className="progress w-full h-3 bg-slate-600"
                  value="122"
                  max="250"
                ></progress>
              </li>
              <li className="py-3 px-7 shadow-md shadow-fuchsia-600 rounded-xl">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3 items-center ">
                    <FaRankingStar className="font-semibold text-lg" />
                    <p className="text-sm font-semibold">RANK</p>
                  </div>
                  <div className="">
                    <p className=" text-sm text-slate-400">
                      <b className="">17</b>/100 #
                    </p>
                  </div>
                </div>
                <progress
                  className="progress w-full h-3 bg-slate-600"
                  value="2144"
                  max="4000"
                ></progress>
              </li>{" "}
            </ul>
          </div>
          <div className="clane-right titles flex flex-col flex-1">
            <div className="flex gap-4 hover:scale-105 duration-300 shadow-lg shadow-fuchsia-500 rounded-xl px-10 items-center justify-center py-2">
              <GrVulnerability className="text-2xl" />
              <h2 className="text-center text-2xl font-semibold ">Achievments</h2>
            </div>
            <div className="titles-swiper pt-4 rounded-lg">
              <Swiper
                slidesPerView={2}
                spaceBetween={-300}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper rounded-lg overflow-x-auto"
              >
                <SwiperSlide>
                  <img
                    className="max-w-28 h-24 w-full"
                    src="https://i.pinimg.com/564x/14/db/27/14db2790941eb087dd2c1f38a6319a14.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="max-w-28 h-24 w-full"
                    src="https://i.pinimg.com/564x/14/db/27/14db2790941eb087dd2c1f38a6319a14.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="max-w-28 h-24 w-full"
                    src="https://i.pinimg.com/564x/14/db/27/14db2790941eb087dd2c1f38a6319a14.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="max-w-28 h-24 w-full"
                    src="https://i.pinimg.com/564x/14/db/27/14db2790941eb087dd2c1f38a6319a14.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="max-w-28 h-24 w-full"
                    src="https://i.pinimg.com/564x/14/db/27/14db2790941eb087dd2c1f38a6319a14.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;