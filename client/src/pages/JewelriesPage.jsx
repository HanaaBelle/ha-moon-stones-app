import React from 'react';
import Header from '../components/Header.jsx';
import FilterBar from '../components/FilterBar.jsx';
import JewelryCard from '../components/JewelryCard.jsx';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../components/Footer.jsx';
import Backicon from '../components/BackIcon.jsx';

import {NavLink} from 'react-router-dom';

const JewelriesPage = () => {
    return (
        <div>
            <Header/>
            <FilterBar/>
            <div className="flex justify-center items-center h-full">
                <div className="bg-gray-200 p-2 justify-center rounded-3xl">
                    <JewelryCard/>
                </div>
                <div style={{marginTop: "200vh"}}>
                    <ScrollToTop smooth className="px-1.5 rounded-3xl shadow-lg"/>
                </div>
            </div>
            <NavLink to='/'> <Backicon/> </NavLink>
            <Footer/>
        </div>
    );
};

export default JewelriesPage;
