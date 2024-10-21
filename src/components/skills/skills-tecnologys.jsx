import React from 'react';
import SkillsBlond from './skills-blond';

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
        { name: "HTML5", url: "https://cdn-icons-png.flaticon.com/512/25/25231.png", size: "w-20 h-20" },
        { name: "Free Pascal", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/640px-Microsoft_365_%282022%29.svg.png", size: "w-20 h-20" },
        // { name: "Free Pascal", url: "https://user-images.githubusercontent.com/53489910/71287686-f441b180-2360-11ea-8a32-aa2e692e4b04.png", size: "w-28 h-28" }
    ];

    const skillsLearning = [
        { name: "Angular", url: "https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png", size: "w-16 h-16" },
        { name: "Python", url: "https://images.vexels.com/media/users/3/166477/isolated/lists/9bb722f0e85ddbc1ce0f064534fd2311-python-programming-language-icon.png", size: "w-20 h-20" },
        { name: "Angular", url: "https://cdn.jim-nielsen.com/macos/512/figma-2021-05-05.png?rf=1024", size: "w-20 h-20" },
        { name: "Angular", url: "https://cdn-icons-png.flaticon.com/512/59/59137.png", size: "w-20 h-20" },
    ]

    return (
        <>
            <div className="p-8 bg-white">
                <div className='mx-auto'>
                    <div>
                        <h2 className="text-3xl mb-6 text-center mt-[2rem] sm:text-4xl lg:text-5xl font-extrabold text-black">Tecnologias que manejo</h2>
                        <div className="flex  justify-center items-center gap-6 max-[1000px]:flex-wrap">
                            {skills.map((skill) => (
                                <div key={skill.name} className={`flex items-center justify-center ${skill.size}`}>
                                    <img src={skill.url} alt={skill.name} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-[5rem]'>
                        <h2 className="text-3xl mb-6 text-center mt-[2rem] sm:text-4xl lg:text-5xl font-extrabold text-black">Technologies que estoy aprendiendo</h2>
                        <div className="flex  justify-center items-center gap-6 max-[1000px]:flex-wrap">
                            {skillsLearning.map((skillsLearning) => (
                                <div key={skillsLearning.name} className={`flex items-center justify-center ${skillsLearning.size}`}>
                                    <img src={skillsLearning.url} alt={skillsLearning.name} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <SkillsBlond />
        </>

    );
}
