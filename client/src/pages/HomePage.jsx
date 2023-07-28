import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import Footer from '../components/Footer.jsx';

const Homepage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <ImageBanner/>
            <Footer/>
        </div>
    );
};

export default Homepage;