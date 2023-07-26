import React from 'react';
import FavoritButton from './FavoritButton.jsx';
import AddToCartButton from './AddToCartButton.jsx';
import cardList from '../pages/data.js';
import {NavLink} from 'react-router-dom';

const JewelryCard = () => {
    return (
        <div className="m-5">
            <div className="grid lg:grid-cols-3 gap-4 justify-center">
                {cardList.map((card, index) => (
                    <div key={index} className="mb-5 px-5 p-5 bg-slate-300 rounded-3xl shadow-lg">
                        <NavLink to={`/singleJewelry`}>
                            <img
                                src={card.img}
                                alt={card.title}
                                className="rounded-3xl"
                                height="300"
                                width="400"
                            />
                            <div>
                                {card.id}
                            </div>
                            <p className="items-center">
                                For More details
                                <span className="text-blue-700 cursor-pointer"> Click Here</span>
                            </p>
                        </NavLink>
                        <p>{card.title}</p>
                        <p>{card.price}</p>
                        <div className='flex justify-between mb-6'>
                            <AddToCartButton/>
                            <FavoritButton/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JewelryCard;
