import { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import FindInPageIcon from "@mui/icons-material/FindInPage";

import PhonePopup from "./PhonePopup.jsx";
import AboutMeR from "./aboutMeR.jsx";

const HomePage = () => {
    const textRef = useRef(null);
    const homePageRef = useRef(null);

    const [showButton, setShowButton] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const texto = "Luis Rodrigo";

    useEffect(() => {
        let intervalId;
        let timeoutId;

        const efectTextTyping = (elemento, text) => {
            let i = 0;

            clearInterval(intervalId);
            clearTimeout(timeoutId);

            elemento.textContent = "";

            intervalId = setInterval(() => {
                if (i < text.length) {
                    elemento.textContent += text[i];
                    i++;
                } else {
                    clearInterval(intervalId);

                    timeoutId = setTimeout(() => {
                        elemento.textContent = "‎";
                        efectTextTyping(elemento, text);
                    }, 700);
                }
            }, 100);
        };

        if (textRef.current) {
            efectTextTyping(textRef.current, texto);
        }

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [texto]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= 950) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (homePageRef.current) {
            homePageRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div
                id="idHomePage"
                ref={homePageRef}
                className="flex min-h-screen flex-col items-center justify-center bg-[#161513]"
            >
                <div className="mx-auto mt-[2rem] text-center sm:mt-[3rem]">
                    {/* Imagen de perfil */}
                    <div className="mx-auto mb-6 h-[17rem] w-[17rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#0E3386] to-[#00CED1] sm:mb-8 sm:h-[20rem] sm:w-[20rem]">
                        <img
                            src="/iconLr1.png"
                            alt="Luis Rodrigo"
                            className="h-full w-[23rem] object-cover"
                        />
                    </div>

                    {/* Nombre con efecto de escritura */}
                    <div className="px-4">
                        <h1
                            ref={textRef}
                            className="mx-auto mb-4 min-h-[3rem] max-w-screen-md text-[2rem] font-extrabold text-white sm:mb-6 sm:text-4xl lg:text-5xl"
                        />
                    </div>

                    {/* Profesiones y estudios */}
                    <div className="px-4">
                        <span className="mx-auto block max-w-5xl bg-gradient-to-tr from-[#00CED1] to-[#0E3386] bg-clip-text text-[1.5rem] font-extrabold leading-tight text-transparent sm:text-3xl lg:text-4xl">
                            Full Stack Developer Jr | QA | Technician | Computer
                            Systems Engineering Student
                        </span>
                    </div>

                    {/* Redes sociales y contacto */}
                    <div className="mt-[2rem]">
                        <div className="flex flex-wrap justify-center gap-[2rem]">
                            <a
                                href="https://www.linkedin.com/in/luis-rodrigo-vaquin-624933328"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar perfil de LinkedIn"
                                className="transition-transform duration-300 hover:scale-125"
                            >
                                <LinkedInIcon
                                    style={{
                                        fontSize: 35,
                                        color: "#FFFFFF",
                                    }}
                                />
                            </a>

                            <a
                                href="https://github.com/luisvaquin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar perfil de GitHub"
                                className="transition-transform duration-300 hover:scale-125"
                            >
                                <GitHubIcon
                                    style={{
                                        fontSize: 35,
                                        color: "#FFFFFF",
                                    }}
                                />
                            </a>

                            <button
                                type="button"
                                onClick={handleOpenPopup}
                                aria-label="Mostrar número de teléfono"
                                className="flex items-center transition-transform duration-300 hover:scale-125"
                            >
                                <CallIcon
                                    style={{
                                        fontSize: 35,
                                        color: "#FFFFFF",
                                    }}
                                />
                            </button>

                            <a
                                href="mailto:luisrodrigo2330@gmail.com"
                                aria-label="Enviar correo electrónico"
                                className="transition-transform duration-300 hover:scale-125"
                            >
                                <MarkEmailUnreadIcon
                                    style={{
                                        fontSize: 35,
                                        color: "#FFFFFF",
                                    }}
                                />
                            </a>

                            <a
                                href="/Luis-Rodrigo-Vaquin-CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ver currículum"
                                className="transition-transform duration-300 hover:scale-125"
                            >
                                <FindInPageIcon
                                    style={{
                                        fontSize: 35,
                                        color: "#FFFFFF",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup del teléfono */}
            <PhonePopup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
            />

            {/* Botón para regresar arriba */}
            {showButton && (
                <div className="fixed bottom-5 right-5 z-10 flex items-end justify-end">
                    <button
                        type="button"
                        title="Regresar arriba"
                        onClick={scrollToTop}
                        className="block h-[3.5rem] w-[3.5rem] transform rounded-full transition-transform hover:scale-110 hover:rotate-12 sm:h-[4rem] sm:w-[4rem] lg:h-[5rem] lg:w-[5rem]"
                    >
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                            <KeyboardDoubleArrowUpIcon />
                        </div>
                    </button>
                </div>
            )}

            <AboutMeR />
        </>
    );
};

export default HomePage;