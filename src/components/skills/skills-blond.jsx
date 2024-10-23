import React from 'react'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SectionEducation from '../../pages/section-education';

const iconFlextion = () => {
    return (
        <HowToRegIcon className='mr-auto mb-2' style={{ fontSize: 35, color: '#88DC65' }} />
    )
}

export const SkillsBlond = () => {
    return (
        <>

            <section className="bg-[#161513] max-[550px]:h-auto min-[550px]:mt-[100px] max-[750px]:mt-[5rem]" id="routerContact">
                <div className="container px-6 py-10 mx-auto max-[1200px]:text-[13px]">
                    <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-black">Habilidades blandas</h2>

                    <div className="grid grid-cols-1 min-[1000px]:grid-cols-4 gap-8 text-left">
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Adaptabilidad</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Capacidad de aprendizaje</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Networking</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Trabajo en equipo</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Creatividad</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Ética laboral</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Diplomacia</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">{iconFlextion()}Asertividad</h1>
                    </div>
                </div>
            </section>
            <SectionEducation />
        </>
    );
}
