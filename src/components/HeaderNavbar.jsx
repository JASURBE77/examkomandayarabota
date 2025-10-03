import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HeaderNavbar = () => {
  return (
    <div className='max-w-[100%] w-[95%] mx-auto' >
        <div className='flex items-center p-5 justify-between'>
         <div className='flex items-center gap-10'>
             <Link to={'/'}>
               <h1 className='text-red-500 font-bold text-6xl font-'>olcha</h1>
             </Link>
            <button className='flex gap-5 items-center justify-center text-[20px] hover:text-red-500 hover:border-red-500 transition-all w-[170px] p-3 border-2 border-black rounded-2xl'><RxHamburgerMenu /> Каталог</button>
         </div>
            <form action="" className='flex items-center'>
                <input className='input text-2xl input-neutral w-[600px] outline-none py-6 bg-base-200 border-none' type="text" />
                <button className='bg-red-500 text-white relative z-1 right-11 rounded-md text-2xl p-3'><IoSearch /></button>
            </form>
            <div className='flex gap-10 items-center'>
                <div className='flex flex-col text-[18px] items-center'>
                    <FaRegHeart />
                    Избранные
                </div>
                 <div className='flex flex-col text-[18px] items-center'>
                    <FaRegHeart />
                    Избранные
                </div>
                 <div className='flex flex-col text-[18px] items-center'>
                    <FaRegHeart />
                    Избранные
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderNavbar