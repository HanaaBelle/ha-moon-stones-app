import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import cardList from '../pages/data.js';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {NavLink} from "react-router-dom";

const ImageBanner = () => {

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (

        <div className='bg-blue-200 p-2 justify-center relative flex items-center'>

            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100'
                           onClick={slideLeft} size={150}
            />
            <div
                id='slider'
                className='w-full h-full overflow-x-scroll scroll mb-5 px-7 p-2 bg-orange-100 rounded-2xl shadow-lg
                whitespace-nowrap scroll-smooth scrollbar-hide'
            >
                {cardList.map((card, index) => (
                    <NavLink to={`/singleJewelry/${card.id}`} key={card.id}>
                        <Thumbnail key={index} card={card}/>
                    </NavLink>
                ))}
            </div>

            <MdChevronRight
                className='opacity-50 cursor-pointer hover:opacity-100'
                onClick={slideRight} size={150}
            />
        </div>
    );
};

export default ImageBanner;

