import React from 'react';
import { useState } from 'react';
import {AiFillLeftCircle} from 'react-icons/Ai';
import {AiFillRightCircle} from 'react-icons/Ai'

const Carousel = ({slides}) => {

    //Etat initial = image d'index 0
    const [currentIndex, setCurrentIndex] = useState(0);

    //Fonction qui permet à la flèche gauche d'afficher la photo précédente
    const goToPrevious = () => {
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    //Fonction qui permet à la flèche droite d'afficher la photo suivante
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    //Fonction qui permet d'afficher une photo précise si on clique sur le petit rond correspondant
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='white  rounded-xl m-5 p-5 flex-auto'>
            <p className='absolute z-50 text-black top-72 left-6 cursor-pointer text-5xl opacity-50' onClick={goToPrevious}><AiFillLeftCircle/></p>
            <p className='absolute z-50 text-black top-72 right-6 cursor-pointer text-5xl opacity-50' onClick={goToNext}><AiFillRightCircle/></p>
            <img src={slides[currentIndex].url} alt="fauteuil pioupiou" className='rounded-3xl h-96 relative' />
            <div className='flex justify-center'>
                {slides.map((slide, slideIndex) =>(
                    <div key={slideIndex} className='m-1 cursor-pointer text-3xl' onClick={()=>goToSlide(slideIndex)}>•</div>
                ))}
            </div>
        </div>
    )
};

export default Carousel;