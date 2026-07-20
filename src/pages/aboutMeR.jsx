import React from "react";
import AboutMe from "./aboutMe";
import SectionEducation from "./section-education";
import CardsProjects from "@/components/cards/cardsProjects";

import "animate.css";
import "../index.css";

import svgAvatar from "/src/assets/icon3.svg";

const AboutMeR = () => {
    return (
        <>
            <section className="min-h-screen flex flex-col sm:flex-row bg-[#161513] text-white">
                {/* Lado izquierdo: presentación profesional */}
                <div className="w-full sm:w-1/2 px-6 py-16 sm:p-8 flex flex-col justify-center items-center animate__animated animate__zoomIn appear">
                    <h1 className="text-[1.8rem] sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center">
                        ¡Hola! 👋🏻 Un gusto conocerte.
                    </h1>

                    <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto mt-4 sm:mt-8">
                        <p className="text-[1rem] sm:text-[1.15rem] lg:text-[1.3rem] leading-relaxed text-justify">
                            Soy QA Auditor y Full Stack Developer Junior, con
                            experiencia en desarrollo web, automatización de
                            procesos y optimización de soluciones tecnológicas.
                            Actualmente cuento con 2 años de experiencia
                            participando en proyectos de distintas escalas,
                            desde landing pages y desarrollo web hasta
                            automatización de procesos y flujos de trabajo.
                        </p>

                        <p className="text-[1rem] sm:text-[1.15rem] lg:text-[1.3rem] leading-relaxed text-justify mt-5">
                            He contribuido en proyectos junto al equipo de
                            ingeniería y desarrollo de Datalab, perteneciente a
                            Grupo Prensa Libre, trabajando con un enfoque
                            orientado a la resolución de problemas, la calidad
                            del software, la eficiencia, la experiencia del
                            usuario y la mejora continua.
                        </p>

                        {/* Imagen visible únicamente en dispositivos móviles */}
                        <img
                            src={svgAvatar}
                            alt="Ilustración profesional de Luis Rodrigo Vaquin"
                            id="routeProyects"
                            className="block sm:hidden w-full max-w-[24rem] h-auto rounded-md mx-auto mt-12 animate-wave appear"
                        />
                    </div>
                </div>

                {/* Lado derecho: ilustración */}
                <div className="hidden sm:flex w-1/2 min-h-screen bg-white justify-center items-center p-8">
                    <div className="w-full flex justify-center items-center">
                        <img
                            src={svgAvatar}
                            alt="Ilustración profesional de Luis Rodrigo Vaquin"
                            id="routeProyectsDesktop"
                            className="w-full max-w-[36rem] h-auto rounded-md animate-wave appear"
                        />
                    </div>
                </div>
            </section>

            <CardsProjects />

            <AboutMe />

            <SectionEducation />
        </>
    );
};

export default AboutMeR;