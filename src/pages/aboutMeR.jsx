import React from 'react';
import AboutMe from './aboutMe';
import SectionExperience from './sectionExperience';
import 'animate.css';
import '../index.css';
import SectionEducation from './section-education';


const AboutMeR = () => {
    return (
        <>
            <div className='h-[100vh] flex flex-col sm:flex-row bg-[#161513] text-white'>

                {/* Lado izquierdo: texto centrado con justificación */}
                <div className='w-full sm:w-1/2 p-[1rem] flex flex-col justify-center items-center mt-4 animate__zoomIn appear'>

                    {/* Título principal */}
                    <h1
                        className="text-[2rem] sm:text-4xl lg:text-5xl font-extrabold mb-4 text-center"
                    >
                        Un poco sobre mí
                    </h1>

                    {/* Párrafo de presentación centrado y justificado */}
                    {/* Párrafo de presentación centrado y justificado */}
                    <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[70%] mx-auto sm:mt-[6rem] mt-4">
                        <p className="text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-relaxed text-justify sm:mt-[0.5rem]">
                            ¡Hola! 👋🏻 Mi nombre es <strong>Luis Rodrigo Vaquin</strong>, soy Perito Técnico en Informática y actualmente estudiante de la carrera de Ingeniería en Sistemas.
                            soy un apasionado de la tecnología y el desarrollo de software, breve experiencia en proyectos de desarrollo y análisis de datos.
                        </p>

                        {/* Esta imagen solo se verá en móviles */}
                        <img
                            className="block sm:hidden w-auto h-auto rounded-md mx-auto my-10 animate-wave mt-[5rem]"
                            src="../src/assets/icon3.svg"
                            alt="Graphic Design"
                            id="routeProyects"
                        />
                    </div>
                </div>

                {/* Lado derecho: imagen o estilo visual */}
                <div className='bg-white h-[100vh] w-1/2 flex justify-center items-center hidden sm:flex '>

                    <div className="mt-[1rem] max-[1000px]:mt-[-5rem]" id="">
                        <img className="w-[auto] h-[auto] rounded-md mx-[auto] my-[auto]
                         max-[650px]:my-[5rem] animate-wave appear" src="../src/assets/icon3.svg" alt="Graphic Design" id="routeProyects" />
                    </div>
                </div>
            </div>
            <AboutMe />
            <SectionEducation/>
        </>
    );
};

export default AboutMeR;
