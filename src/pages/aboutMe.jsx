import React, { useState, useEffect } from 'react';
import Cards from '../components/cards/cards';
import CarouselCertificate from '../components/cards/carouselCertificate';

const AboutMe = () => {
    const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

    useEffect(() => {
        const updateBackground = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage('/public/imgFondLuis8.jpeg'); // Imagen para móviles
            } else {
                setBackgroundImage('https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); // Imagen para escritorio
            }
        };

        // Ejecuta la función al cargar el componente
        updateBackground();

        // Agrega un event listener para detectar cambios de tamaño de pantalla
        window.addEventListener('resize', updateBackground);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', updateBackground);
        };
    }, []);

    return (
        <>
            <section id="aboutMe" className="sm:p-10 lg:p-20 p-5 aboutMe">
                <div className="container mx-auto mt-[1rem]">
                    <div className="sm:grid grid-cols-2 max-[1250px]:grid-cols-1">
                        <div className="sm:p-10 p-5 bg-white sm:me-5 mb-10 rounded-md shadow-md h-[auto] ">
                            <h3 className="text-2xl mb-5 font-bold">Un poco sobre mí</h3>
                            <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px]">
                                ¡Hola! Soy Luis Rodrigo Vaquin, actualmente tengo 18 años de edad y soy un apasionado
                                de la tecnología. <br /> <br /> Desde pequeño, me ha fascinado aprender
                                constantemente y descubrir cómo funcionan las cosas.
                                Me considero un joven autodidacta, creativo y entusiasta,
                                siempre buscando nuevas formas de aprender y mejorar día con día.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative w-full h-[50vh] bg-fixed bg-cover bg-center mt-[-2rem]"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}>
                <div className="absolute inset-0 h-full w-full bg-black/40"></div>
                <div className="relative p-[3rem] min-[1200px]:p-[12rem] text-center max-[1000px]:pt-[4.5rem] "></div>
            </div>

            <Cards />
        </>
    );
};

export default AboutMe;
