import React from 'react';
import FavoritButton from './FavoritButton.jsx';
import AddToCartButton from './AddToCartButton.jsx';
import cardList from '../pages/data.js';
import {NavLink} from 'react-router-dom';
import Thumbnail from "./Thumbnail.jsx";

const JewelryCard = () => {
    return (
        <div className="m-5">
            <div className="grid lg:grid-cols-3 gap-4 justify-center">
                {cardList.map((card, index) => (
                    <div key={index} className="mb-5 px-5 p-5 bg-slate-300 rounded-3xl shadow-lg">
                        <NavLink to={`/singleJewelry/${card.id}`} key={card.id}>
                            <Thumbnail key={index} card={card}/>
                            <br/>
                        </NavLink>
                        <p>{card.title}</p>
                        <p>{card.price}</p>
                        <div className='flex justify-between mb-6'>
                            <AddToCartButton/>
                            <FavoritButton/>
                        </div>
                        <p className="items-center">
                            For More details
                            <span className="text-blue-700 cursor-pointer"> Click Here</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JewelryCard;
