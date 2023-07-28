import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Backicon from '../components/BackIcon.jsx';

import {NavLink} from 'react-router-dom';

const Cartpage = () => {
    return (
        <div>
            <Header/>
            <p>🛒</p>
            <NavLink to='/'> <Backicon/> </NavLink>
            <Footer/>
        </div>
    );
};

export default Cartpage;
