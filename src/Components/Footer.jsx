import React from 'react';
import {GrFacebook,GrInstagram,GrLinkedin} from 'react-icons/gr'

const Footer=()=>{

    return (
        <>
        <footer className='bg-zinc-800 w-full font-Mulish m-0 p-0 text-white-900'>
            <div>

            <ul className="flex flex-col text-white md:flex-row md:justify-center md:space-y-0 md:space-x-8  items-center  p-3">
                <li className=" p-5">Shop</li>
                <li className=' p-5'>Top 100</li>
                <li className=' p-5'>Join Athletic Estate</li>
                <li className=' p-5'>About AE</li>
                <li className=' p-5'>Contact</li>
            </ul>
            </div>
            <div>

            <ul className='flex flex-row justify-center space-x-7'>
                <li className='text-white text-3xl '><GrFacebook/></li>
                <li className='text-white text-3xl '><GrInstagram/></li>
                <li className='text-white text-3xl '><GrLinkedin/></li>
            </ul>
            </div>
            <div className='text-white mt-3 space'>
            © Athletic Estate 2022. All Rights Reserved
            </div>
            <div className="text-white pb-5">
            Privacy Policy | Terms and Conditions
            </div>
        </footer>
        </>
    )
}

export default Footer;