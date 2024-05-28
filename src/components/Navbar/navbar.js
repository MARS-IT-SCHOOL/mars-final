import React, { useEffect, useState } from 'react'
import { BsCoin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineInventory2 } from "react-icons/md";
import DropdownMenu from "../DropdownMenu/DropdownMenu"

const Navbar = ({ nameUser, coin }) => {

    return (
        <nav className='glass z-50 font-mono py-5 container mx-auto px-10 rounded-2xl border-opacity-100 border-2 border-white'>
            <div className=''>
                <div className='flex w-full items-center justify-between'>
                    <div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 px-10">Рус</div>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full relative z-[999]">
                                <li><a>O'z</a></li>
                                <li><a>Eng</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex gap-10 font-bold'>
                        <Link data-theme to={"/dashboard/shop"} className='flex gap-1 items-center hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-red-600 hover:text-black duration-700 shadow-sm shadow-black rounded-lg py-2 px-6 cursor-pointer'>
                            <GiShoppingCart className='text-2xl' />
                            Shop
                        </Link>
                        <Link data-theme to={"/dashboard/inventory"} className='flex gap-1 items-center hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-red-600 hover:text-black duration-700 shadow-sm shadow-black rounded-lg py-2 px-6 cursor-pointer'>
                            <MdOutlineInventory2 className='text-2xl' />
                            Inventory
                        </Link>
                        <div data-theme className={`flex gap-2 shadow-sm shadow-black rounded-lg py-2 px-4`}>
                            <BsCoin className='text-2xl font-semibold' />
                            <p>{coin || 0}</p>
                        </div>
                    </div>
                        <DropdownMenu nameUser={nameUser}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar