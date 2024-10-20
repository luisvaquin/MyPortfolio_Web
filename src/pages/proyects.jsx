import React from "react";
import NavbarNavigate from "../components/navbarNavigate/navbarNavigate";
const Proyects = () => {
    const cards = [
        {
            img: ["https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp"],
            name: "CalcGrafica-Java",
            description: "Este pequeño proyecto es  una pequeña calculadora con una interfaz amigable y sencilla desarrollada con JavaFxml fue uno de los primeros proyectos que realize",
            url: "https://github.com/LuisRodrigo23/CalculadoraGrafica/tree/main/CalculadoraGrafica_2022300"
        },
        {
            img: ["https://bambu-mobile.com/wp-content/uploads/2022/07/Tipos-de-datos-MySQL-datos-que-almacenan-los-gestores-de-bases-de-datos-datos-numericos-fechas-Bambu-Mobile.png"],
            name: "TonysK MySQL-Java",
            description: "Este proyecto se basa en un sistema de control en ventas de comida donde puedo considerar un gran trabajo la base de datos mi utilizando en  mi caso una Db relacional como en este caso MySQL",
            url: "https://github.com/LuisRodrigo23/TonysKinalApllicacion.git"
        }, {
            img: ["https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React.jpg"],
            name: "Blog React",
            description: "Este proyecto se basa en un blog web enfocado por la parte del FrontEnd desarrollado principalmente utilizando el fremwork de React y tailwind como para el diseño en componentes",
            url: "https://github.com/lvaquin2022300/blog_frontend.git"
        }, {
            img: ["https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"],
            name: "Gestor de opiniones",
            description: "Este proyecto fue desarrollado en la parte Backend sin interfaz y se basa en un gestor de opiniones de usuario, se desarrollo con NodeJs",
            url: "https://github.com/lvaquin2022300/Gestor_Opiniones.git"
        },
        {
            img: ["https://crehana-blog.imgix.net/media/filer_public/76/e0/76e09e74-c3bc-436e-8dd1-218d70842551/blog.jpg"],
            name: "Tienda-HTML y Css",
            description: "Aca encontraras una tienda Web desarrollado con html5 y css fue uno de los primeros proyectos de practica web",
            url: "https://github.com/lvaquin2022300/TiendaOnV.git"
        },

        {
            img: ["https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto"],
            name: "ControlAcademico-Js, Node",
            description: "Este proyecto de igual manera se basa por el lado del backend y se desarrollo utilizando NodeJs",
            url: "https://github.com/lvaquin2022300/control_academico.git"
        }, {
            img: ["https://info.ibabs.com/hubfs/3.%20iBabs/Core%20design%20files/ibabs-templates-cover-board-meeting-agenda%20(1).png"],
            name: "Agenda Web",
            description: "Para el desarrollo de esta agenda web utilize tecnologias basicas como Html, Css y JavaScript",
            url: "https://github.com/lvaquin2022300/Agenda_Web.git"
        },
        {
            img: ["https://tailwindcss.com/_next/static/media/card.9e9b9cc2.jpg"],
            name: "Mi portafolio",
            description: "En etse aparto podras encontrar el codigo de este propio proyecto donde uilizee principalmente React y Tailwind",
            url: "https://github.com/LuisRodrigo23/Portafolio_React.git"
        },
    ];

    return (
        <>
            <NavbarNavigate />
            <div className="m-auto px-[2rem] py-8 sm:px-6 lg:px-8 max-w-8xl bg-[#161513] ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-[3rem]">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white shadow-2xl overflow-hidden rounded-lg">
                            <img
                                src={card.img[0]}
                                alt={card.name}
                                className="w-full sm:h-[20rem] object-cover object-center"
                            />
                            <div className="p-6 sm:p-8 lg:p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h2>
                                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
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
                                            className="text-black hover:underline"
                                        >
                                            VER CODIGO
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Proyects;
