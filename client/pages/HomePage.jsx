import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageBanner from '../components/ImageBanner.jsx';
import Footer from '../components/Footer';

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