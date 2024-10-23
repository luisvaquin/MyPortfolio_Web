import React from 'react';
import { Skills } from '../skills/skills-tecnologys';
import CarouselCertificate from './carouselCertificate';

const Cards = () => {
    const cards = [
        {
            img: ["https://www.prensalibre.com/wp-content/uploads/2024/04/goo-the-data-1.jpg?quality=52"],
            name: "GOO-ADMIN",
            description: `Tuve la oportunidad de poder desarrollar parte de la plataforma administrativa de  <a href="https://www.goo.live/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-blue-700 underline text-[1.1rem] font-bold">GOO</a> plataforma DATASINCE con diferentes tecnologías y servicios como: AWS, SQL, React, Node, MaterialUI y Tailwind.
            Puedes ver el proyecto aquí: <a href="https://www.goo.live/" target="_blank" rel="noopener noreferrer" class="text-blue-900 hover:text-blue-700 underline text-[1.1rem] font-bold">GOO-Admin</a>.`,
            url: "https://github.com/tecmart/goo-admin.git"
        },
        {
            img: ["https://info.ibabs.com/hubfs/3.%20iBabs/Core%20design%20files/ibabs-templates-cover-board-meeting-agenda%20(1).png"],
            name: "Agenda Web",
            description: "Para el desarrollo de esta agenda web utilicé tecnologías básicas como HTML, CSS y JavaScript.",
            url: "https://github.com/lvaquin2022300/Agenda_Web.git"
        },

        /* {
             img: ["https://static.wixstatic.com/media/128120_009d77598a93491884579eb0502a3a0f~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/128120_009d77598a93491884579eb0502a3a0f~mv2.jpg"],
             name: "TonysK Java-MySQL",
             description: "Este proyecto se basa en un sistema de control de ventas de comida. La base de datos utilizada es MySQL, una DB relacional.",
             url: "https://github.com/LuisRodrigo23/TonysKinalApllicacion.git"
         }*/
    ];

    return (
        <>
            <div className="m-auto px-[2rem] py-8 sm:px-6 lg:px-8 max-w-8xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {cards.map((card, index) => (
                        <div key={index} className="bg-white shadow-2xl overflow-hidden rounded-lg">
                            <img
                                src={card.img[0]}
                                alt={card.name}
                                className="w-full sm:h-[20rem] object-cover object-center"
                            />
                            <div className="p-6 sm:p-8 lg:p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h2>
                                {/* Renderiza la descripción con dangerouslySetInnerHTML para interpretar el HTML del enlace */}
                                <p className="text-sm text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: card.description }} />
                                {card.url && (
                                    <div className="flex items-center">
                                        <img
                                            className="w-10 h-10 rounded-full mr-4"
                                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                            alt="avatar"
                                        />
                                        <a
                                            href={card.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                                        >
                                            VER CÓDIGO
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*Tecnologys */}
            <Skills />
        </>
    );
};

export default Cards;
