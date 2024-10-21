
import React from 'react'
import Cards from '../components/cards/cards'

const AboutMe = () => {
    return (
        <>
            <section id="aboutMe" className="sm:p-10 lg:p-20 p-5 aboutMe">
                <div className="container mx-auto mt-[1rem]">
                    <div className="sm:grid grid-cols-2 max-[1250px]:grid-cols-1">
                        <div className="sm:p-10 p-5 bg-white sm:me-5 mb-10 rounded-md shadow-md h-[auto] ">
                            <h3 className="text-2xl mb-5 font-bold">Un poco sobre mi</h3>
                            <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px]">
                                ¡Hola! Soy Luis Rodrigo Vaquin, tengo 18 años de edad y soy un apasionado
                                de la tecnología. <br /> <br /> Desde pequeño, me ha fascinado aprender
                                constantemente y descubrir cómo funcionan las cosas.
                                Me considero una persona autodidacta, creativa y entusiasta,
                                siempre buscando nuevas formas de aprender y mejorar día con día.
                            </p>

                        </div>
                        {  /* <div className="mt-[1rem] max-[1000px]:mt-[-5rem]" id="">
                        <img className="w-[auto] h-[auto] rounded-md mx-[auto] my-[auto]
                         max-[650px]:my-[5rem] animate-wave" src="./iconDevSvg.svg" alt="Graphic Design" id="routeProyects" />
                    </div>*/}
                    </div>
                </div>
            </section>
            <div className="relative w-full h-[40vh] bg-fixed bg-cover bg-center mt-[-2rem]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}>
                <div className="absolute inset-0 h-full w-full bg-black/40"></div>
                <div className="relative p-[3rem] min-[1200px]:p-[12rem] text-center max-[1000px]:pt-[4.5rem] ">
                </div>
            </div>
            <Cards />
        </>
    )
}

export default AboutMe