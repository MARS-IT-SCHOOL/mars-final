import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FortNight from "../../../assets/images/hero.png";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileCardData } from '../../../slices/profileCardSlice'

const ProfileCard = ({ userRank, userGroupName, userFullName, userAllianceName }) => {
    const { userInfo, loading, error } = useSelector((state) => state.profileCard);
    const stateUser = useSelector(state => state.auth);


    let userData = stateUser.user
    let isAuth = stateUser.isAuthenticated

    if (loading) {
        return (
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userInfo) {
        return <div>No user information available</div>;
    }
    console.log("EXP: ", 1000 * +userData.level)

    // Function to determine background color based on user rank
    const getBgColor = (rank) => {
        switch (rank) {
            case "Marsianin":
                return "bg-slate-700";
            case "Junior Marsianin":
                return "bg-blue-500";
            case "Strong Junior Marsianin":
                return "bg-yellow-500";
            case "Middle Marsianin":
                return "bg-violet-500";
            case "Strong Middle Marsianin":
                return "bg-purple-700";
            case "Senior":
                return "bg-fuchsia-500";
            case "TeamLead Marsianin":
                return "bg-red-500";
            default:
                return "";
        }
    };

    // Function to determine shadow color based on user rank
    const getShadowColor = (rank) => {
        switch (rank) {
            case "Marsianin":
                return "shadow-mythic-700";
            case "Junior Marsianin":
            case "Strong Junior Marsianin":
            case "Middle Marsianin":
            case "Strong Middle Marsianin":
                return "shadow-slate-700";
            case "Senior":
                return "shadow-mythic-700";
            case "TeamLead Marsianin":
                return "shadow-custom";
            default:
                return "";
        }
    };

    // Function to determine text color based on user rank
    const getTextColor = (rank) => {
        switch (rank) {
            case "Marsianin":
                return "text-custom-mythic";
            case "Junior Marsianin":
            case "Strong Junior Marsianin":
            case "Middle Marsianin":
            case "Strong Middle Marsianin":
                return "text-custom-mythic";
            case "Senior":
                return "text-custom-legend";
            case "TeamLead Marsianin":
                return "shadow-custom";
            default:
                return "";
        }
    };

    // Function to determine text shadow based on user rank
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

    // Function to determine shadow inner based on user rank
    const getShadowInner = (rank) => {
        switch (rank) {
            case "Marsianin":
                return "shadow-inner shadow-slate-700";
            case "Junior Marsianin":
                return "shadow-inner shadow-blue-700";
            case "Strong Junior Marsianin":
                return "shadow-inner shadow-sky-700";
            case "Middle Marsianin":
                return "shadow-inner shadow-violet-700";
            case "Strong Middle Marsianin":
                return "shadow-inner shadow-indigo-700";
            case "Senior":
                return "shadow-inner shadow-fuchsia-700";
            case "TeamLead Marsianin":
                return "shadow-inner shadow-red-700";
            default:
                return "";
        }
    };

    return (
        <>
            {userData ? (
                <div className={`shadow-xl rounded-2xl relative mt-[40px] mb-[30px]  glass ${getShadowColor(userData.rank)}`}>
                    <div data-theme className={`w-full h-full shadow-lg rounded-2xl ${getShadowInner(userData.rank)} ${getShadowColor(userData.rank)}`}>
                        <div className={`shadow-inner ${getShadowInner(userData.rank)} w-full h-full rounded-2xl p-5`}>
                            <p className={`text-sm py-2 border-b-2 border-opacity-30 border-white`} >
                                Group: <span className='text-sm font-mono text-semibold'>
                                    {userData?.group}
                                </span>
                            </p>
                            <p className={`font-bold text-xl my-10 teamlead`} style={{ textShadow: getTextShadow(userData.rank) }}>{userData.fullname}</p>
                            <div className={`border-2  p-2 max-w-96 text-sm font-mono rounded-lg flex flex-col gap-2 ${getShadowInner(userData.rank)} `} style={{ textShadow: getTextShadow(userData.rank) }}>
                                <div className={`w-full `} style={{ textShadow: getTextShadow(userData.rank) }}>
                                    <p>Programming Level: <span>{userData.rank}</span></p>
                                </div>
                                <div className={`w-full ${userData.clan === "Not Exists Clan" ? "text-red-400" : "text-white"}`} style={{ textShadow: getTextShadow(userData.rank) }}>{userData?.clan.clanName ? userData.clan.clanName : userData.clan}</div>
                                <div className={`w-full`} style={{ textShadow: getTextShadow(userData.rank) }}>
                                    <span>Level: {userData?.level}</span>
                                </div>
                                <div className='w-full'>
                                    <p className='flex justify-between py-2 border-t-2 mt-5 border-white border-opacity-30'>
                                        <span>Exp:</span>
                                        <span>{userData.exp_user}/{1100 * +userData.level}</span>
                                    </p>
                                    {userData.exp_user >= 700 ? (
                                        <progress className={`progress w-full progress-success`} value={userData.exp_user} max={1100 * +userData.level}></progress>
                                    ) : userData.exp_user >= 300 ? (
                                        <progress className={`progress w-full progress-warning`} value={userData.exp_user} max={1100 * +userData.level}></progress>
                                    ) : (
                                        <progress className={`progress w-full progress-error`} value={userData.exp_user} max={1100 * +userData.level}></progress>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <img src={FortNight} alt="Fortnight" className=" w-full max-w-[220px]" />
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </>
    )
}

export default ProfileCard;
