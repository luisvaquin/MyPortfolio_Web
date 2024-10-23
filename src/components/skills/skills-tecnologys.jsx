import React from 'react';
import { SkillsBlond } from './skills-blond';
import CarouselCertificate from '../cards/carouselCertificate';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SectionEducation from '../../pages/section-education';

const iconFlextion = () => {
    return (
        <HowToRegIcon className='mr-auto mb-2' style={{ fontSize: 35, color: '#88DC65' }} />
    )
}

export const Skills = () => {
    const skills = [
        { name: "JavaJs", url: "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png", size: "w-20 h-20" },
        { name: "HTML", url: "https://cdn-icons-png.flaticon.com/512/732/732212.png", size: "w-20 h-20" },
        { name: "CSS", url: "https://cdn-icons-png.flaticon.com/512/732/732190.png", size: "w-20 h-20" },
        { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", size: "w-24 h-24" },
        { name: "MaterialUI", url: "https://static-00.iconduck.com/assets.00/material-ui-icon-1024x814-sytj0yhk.png", size: "w-20 h-20" },
        { name: "taiwlind", url: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--open-source-framework-code-logos-and-brands-pack-icons-9325303.png", size: "w-24 h-24" },
        { name: "Boostrap", url: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png", size: "w-28 h-24" },
        { name: "SQL", url: "https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png", size: "w-20 h-20" },
        { name: "AWS", url: "https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256", size: "w-20 h-20" },
        { name: "HTML5", url: "https://img.icons8.com/m_sharp/200/FFFFFF/github.png", size: "w-24 h-24" },
        { name: "Free Pascal", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/640px-Microsoft_365_%282022%29.svg.png", size: "w-20 h-20" },
    ];

    const skillsLearning = [
        { name: "Angular", url: "https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png", size: "w-16 h-16" },
        { name: "Python", url: "https://images.vexels.com/media/users/3/166477/isolated/lists/9bb722f0e85ddbc1ce0f064534fd2311-python-programming-language-icon.png", size: "w-20 h-20" },
        { name: "Angular", url: "https://cdn.jim-nielsen.com/macos/512/figma-2021-05-05.png?rf=1024", size: "w-20 h-20" },
        { name: "Angular", url: "https://cdn-icons-png.flaticon.com/512/59/59137.png", size: "w-20 h-20" },
        { name: "Netlify", url: "https://www.rlogical.com/wp-content/uploads/2023/03/31d.webp", size: "w-20 h-20" },
    ];

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161513" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="relative bg-[#161513] mt-[-2rem] max-[1000px]:mt-[-1.5rem]">
                <div className="mx-auto mt-[1rem]">
                    <div>
                        <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">Skills</h2>
                        <div className="flex justify-center items-center gap-6 max-[1000px]:flex-wrap">
                            {skills.map((skill) => (
                                <div key={skill.name} className={`flex items-center justify-center ${skill.size}`}>
                                    <img src={skill.url} alt={skill.name} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/** */}
                    <div className='mt-[5rem] mx-3'>
                        <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">Learning Skills</h2>
                        <div className="flex justify-center items-center gap-6 max-[1000px]:flex-wrap">
                            {skillsLearning.map((skill) => (
                                <div key={skill.name} className={`flex items-center justify-center ${skill.size}`}>
                                    <img src={skill.url} alt={skill.name} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*<div className="container px-6 py-10 mx-auto max-[1200px]:text-[13px] mt-[2rem]">
                    <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">Habilidades blandas</h2>

                    <div className="grid grid-cols-1 min-[1000px]:grid-cols-4 gap-8 text-left">
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Adaptabilidad</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Capacidad de aprendizaje</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Networking</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Trabajo en equipo</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Creatividad</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Ética laboral</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Diplomacia</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl ">{iconFlextion()}Asertividad</h1>
                    </div>
                </div> */}
            </div>

            <SectionEducation />
        </>
    );
};
