import React from 'react';
import videoOpeningJewelry from '../assets/videoOpeningJewelries.mp4';
import {NavLink} from 'react-router-dom';
import Menu from "./Menu.jsx";
import ScrollToTop from "react-scroll-to-top";

const Hero = () => {
    return (
        <div className='w-full h-[87vh] relative'>
            <video className='w-full h-full object-cover' src={videoOpeningJewelry} autoPlay muted loop/>
            <div className='absolute top-0 left-0 w-full h-full text-gray p-4
            shadow-lg'>
                <Menu/>
                <div className='w-full h-full flex flex-col justify-center text-center'>

                    <h1 className='text-7xl/[40px]'>Welcome Home</h1>

                    <div className="m-8 flex justify-center">
                        <NavLink to='/jewelries'>
                            <button className='text-2xl/[40px] block bg-slate-600 hover:bg-gray-900 text-white py-2 px-4
                        rounded-3xl shadow-lg'>
                            <span className='text-blue-200 cursor-pointer'>
                                See All Jewelries 💎
                            </span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "200vh"}}/>
            <ScrollToTop smooth className="px-1.5 rounded-3xl shadow-lg"/>
        </div>
    );
};

export default Hero;
