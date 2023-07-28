import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import Carousel from '../components/Carousel.jsx';

import {NavLink, useParams} from 'react-router-dom';
import Backicon from '../components/BackIcon.jsx';

import cardList from "./data.js";

const SingleJewelryPage = () => {

    const {id} = useParams();
    const jewelry = cardList.find(card => card.id === Number(id));

    if (!jewelry) {
        return <p>Bijou non trouvé</p>;  // Ou tout autre message d'erreur que vous voulez montrer
    }

    const slides = [
        {title: jewelry.title, url: jewelry.img},
    ]

    return (
        <div>
            <Header/>
            <h1>Affichage du Bijou sur lequel on a cliqué</h1>

            <div className="flex justify-center">
                <div className="h-screen flex justify-center items-center">
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        <Carousel slides={slides}/>
                        {/* <div className="h-80 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none
                        lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${Amethyst})` }}
                        title="Bracelet en Améthyste"></div> */}
                        <div
                            className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col
                            justify-between leading-normal">
                            <div className="mb-40">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0
                                            1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3
                                            3 0 0 0-6 0z"/>
                                    </svg>
                                    (...)
                                </p>
                                {/* <br /> */}
                                <div className="text-gray-900 font-bold text-xl mb-2">Bracelet en {jewelry.title}</div>
                                <p className="text-gray-700 text-base">
                                    {jewelry.description}</p>
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">{jewelry.price}</p>
                                        <p className="text-gray-600">Date de publication</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink to='/jewelriesPage'><Backicon/></NavLink>
            <Footer/>
        </div>
    );
};

export default SingleJewelryPage;
