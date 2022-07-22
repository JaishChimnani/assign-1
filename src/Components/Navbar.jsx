import React from 'react';
import {GrSearch,GrCart} from 'react-icons/gr'
import {FaBars} from 'react-icons/fa'
import logo from './img/AthleticEstateHeaderIcon.jpg'

const Navbar=()=>{
    return (
        <>
        <nav className='border lg:justify-center text-black-300 flex shadow-xl bg-white-900 font-mulish bg-white sticky top-0 z-20 text-sm'>
            <a href="" className='inline-block lg:hidden p-3 text-xl mx-2'><FaBars/></a>
        <img src={logo} className='h-12 w-14 p-3 ml-6 flex' alt="" />
            <div className="hidden lg:flex mr-12">

            <ul className="flex flex-row px-5 py-2   mx-12 space-x-4">
                <li className='py-2 px-2 hover:text-red-600 '> <span className='hover:text-red-600 inline-block '><GrSearch/></span> Find Your Athlete</li>
                <li className='py-2 px-2 bg-gray-200 text-red-600 rounded-sm'>Shop</li>
                <li className='py-2 px-2 hover:text-red-600'>Top 100</li>
                <li className='py-2 px-2 hover:text-red-600'>About AE</li>
                <li className='py-2 px-2 text-red-600'>Join Athletic Estate</li>
            </ul>
            <div className='flex mx-12 text-right'>
                <div className='flex mx-12 items-center'>
                    <div className='p-1'>Register </div>
                    <span>|</span>
                    <div className='p-1'> Login</div>
                </div>

            <span className='inline-block text-2xl pt-3'><GrCart/></span>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;