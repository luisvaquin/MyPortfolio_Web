import React, { useState, useEffect } from 'react';
import { SkillsBlond } from '../skills/skills-blond';

const CarouselCertificate = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // URLs de las imágenes
        const imageUrls = [
            '../public/certiCiscoSegu.jpg',
            '../public/certificadoPL1.jpg',
            '../public/certiPlatziMarc.jpg',
            '../public/certiCiscoIA.jpg',
            '../public/CertiPL.jpg',
            '../public/certiPlatzi.jpg',
            '../public/certiCiberPlatzi.jpg',
        ];

        // Cargar imágenes
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
            });
        };

        // Verificar que todas las imágenes se hayan cargado correctamente
        Promise.all(imageUrls.map((url) => loadImage(url)))
            .then((loadedImages) => {
                setImages(loadedImages);
            })
            .catch((err) => {
                console.error('Error loading images:', err);
            });
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div id="carouselExampleCaptions" className="relative max-w-screen-xl lg:max-w-screen-2xl mx-auto px-4 lg:px-12">
                {/* Indicadores */}
                <div className="absolute bottom-0 left-0 right-0 z-2 mx-auto mb-4 flex list-none justify-center p-0 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`h-2 w-8 cursor-pointer rounded-full bg-white opacity-50 transition-opacity duration-300 ease-in-out ${index === currentSlide ? 'opacity-100' : ''
                                }`}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>

                {/* Imágenes del carrusel */}
                <div className="relative w-full overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative w-full transition-transform duration-500 ease-in-out ${index === currentSlide ? '' : 'hidden'
                                }`}
                        >
                            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                <img
                                    src={image}
                                    className="block w-full object-contain h-64 sm:h-80 lg:h-[600px] mx-auto"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles de navegación */}

                <button
                    className="absolute top-1/2 left-0 z-10 flex h-10 w-10 items-center justify-center bg-gray-700 bg-opacity-50 hover:bg-opacity-80 focus:bg-opacity-80 text-white rounded-full transform -translate-y-1/2"
                    type="button"
                    onClick={goToPrevSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="absolute top-1/2 right-0 z-10 flex h-10 w-10 items-center justify-center bg-gray-700 bg-opacity-50 hover:bg-opacity-80 focus:bg-opacity-80 text-white rounded-full transform -translate-y-1/2"
                    type="button"
                    onClick={goToNextSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>

        </>
    );
};

export default CarouselCertificate;
