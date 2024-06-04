// RatingTable.js
import React from 'react';
import { motion } from 'framer-motion';
import { GiImperialCrown, GiLaurelCrown } from "react-icons/gi";
import Skeleton from '../Others/Skeleton/Skeleton';

const RatingTable = ({ theme, users, alliance, selected, setSelected, headerVariants }) => {
  return (
    <motion.div data-theme={theme} className="table w-full rounded-2xl max-h-[550px]"
      initial="hidden"
      animate="visible"
    >
      {/* Rating Table header */}
      <div className="table-header flex justify-between border-b border-opacity-40 border-white overflow-hidden rounded-t-2xl dark:shadow-slate-900">
        <motion.div className="table-row flex-1 text-center border-r border-white border-opacity-40 group"
          variants={headerVariants}
          whileHover={{ scale: 0.95 }}
          onClick={() => setSelected(true)}
        >
          <p className="hover:opacity-100 opacity-45 py-5 flex items-center gap-4 justify-center ">
            <span>Top Gamers</span>
            <GiImperialCrown />
          </p>
        </motion.div>
        <motion.div className="table-row flex-1 text-center"
          variants={headerVariants}
          whileHover={{ scale: 0.95 }}
          onClick={() => setSelected(false)}
        >
          <p className="hover:opacity-100 opacity-45 py-5 flex items-center gap-4 justify-center ">
            <span>Top Alliance</span>
            <GiLaurelCrown />
          </p>
        </motion.div>
      </div>
      {/* Rating Table content */}
      {
        selected ?
          (alliance ? <TableContent data={users} /> : <Skeleton array={alliance} />)
          :
          (users ? <TableContent data={users} /> : <Skeleton array={alliance} />)
      }
    </motion.div>
  );
};

const TableContent = ({ data }) => (
  <div className="flex flex-col max-h-[430px] overflow-y-auto font-mono font-semibold">
    {data.map((item, id) => (
      item.rank === "Senior" ? (
        <div className="flex gap-[2%] items-center py-4 px-2 border-y border-slate-700 border-opacity-30 bg-red-500  bg-opacity-50 text-white hover:bg-slate-500 duration-500 text-xs" key={id}>
          <div className="w-[10%] flex items-center justify-center">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">{id >= 3 ? id + 1 : <GiImperialCrown />}</p>
          </div>
          <div className="relative w-[10%] flex items-center justify-center">
            <img src={`${item.images.userimage}` || "none"} className="size-7 rounded-full" alt="Not image " />
          </div>
          <div className="relative w-[40%] flex items-center justify-center flex-col">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">{item.username || "none"}</p>
            <p>{item.clan}</p>
          </div>
          <div className="relative w-[40%] flex items-center justify-center">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">{item.rank || "none"}</p>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">Level: {item.level || "none"}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-[2%] items-center py-4 px-2 border-y border-slate-700 border-opacity-30 hover:bg-slate-500 text-xs" key={id}>
          <div className="w-[10%] flex items-center justify-center">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">{id >= 3 ? id + 1 : <GiImperialCrown />}</p>

          </div>
          <div className="relative w-[10%] flex items-center justify-center">
            <img src={item.images.userimage || "none"} className="size-7 rounded-full" alt="NOT IMAGE" />
          </div>
          <div className="relative w-[40%] flex items-center justify-center flex-col">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">{item.username || "none"}</p>
            <p>{item.clan}</p>
          </div>
          <div className="relative w-[40%] flex items-center justify-center">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">{item.rank || "none"}</p>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <p className="text-xs hover:opacity-100 opacity-45 flex items-center gap-4 ">Level: {item.level || "none"}</p>
          </div>


          
        </div>
        
      )
    ))}
  </div>
);

export default RatingTable;
