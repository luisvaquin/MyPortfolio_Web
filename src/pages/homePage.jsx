import { useEffect, useRef, useState } from "react";
import NavbarNavigate from "../components/navbarNavigate/navbarNavigate.jsx";
import AboutMe from "./aboutMe.jsx";
import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import PhonePopup from "./PhonePopup.jsx";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AboutMeR from "./aboutMeR.jsx";

const HomePage = () => {
    const textRef = useRef(null); // Referencia al div para el efecto de escritura
    const homePageRef = useRef(null); // Referencia al inicio de la página
    const [showButton, setShowButton] = useState(false);
    const texto = "Luis Rodrigo";

    useEffect(() => {
        let intervalId;
        let timeoutId;

        const efectTextTyping = (elemento, text) => {
            let i = 0;

            clearInterval(intervalId);
            clearTimeout(timeoutId);

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
            // Detecta si el usuario ha hecho scroll
            if (window.innerHeight + window.scrollY >= 950) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Limpia el evento al desmontar
        };
    }, []);

    // Función para hacer el scroll suave hacia arriba
    const scrollToTop = () => {
        if (homePageRef.current) {
            homePageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <>

            <div
                className="flex flex-col justify-center items-center min-h-screen bg-[#161513]"
                id="idHomePage"
                ref={homePageRef} // Referencia al inicio de la página
            >
                <div className="mx-auto text-center mt-[2rem] sm:mt-[3rem]">
                    <div className="mx-auto mb-6 sm:mb-8 h-[17rem] sm:h-[20rem] w-[17rem] sm:w-[20rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#0E3386] to-[#00CED1]">
                        <img src="/iconLr1.png" alt="" className="h-[100%] w-[23rem] object-cover" />
                    </div>
                    <div>
                        <h1 ref={textRef} className="max-w-screen-md text-[2rem] sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6"></h1>
                    </div>
                    <div>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00CED1] to-[#0E3386] text-[1.9em] sm:text-4xl lg:text-5xl font-extrabold mt-[-1rem] p-[1.5rem]">
                            Computer Technician <br />

                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00CED1] to-[#0E3386] text-[1.9em] sm:text-4xl lg:text-5xl font-extrabold mt-[-1rem] p-[1.5rem]">
                            Engineering student
                        </span>
                    </div>
                    <div className="mt-[1.5rem]">
                        <div className="flex gap-[2rem] justify-center">
                            <a href="https://www.linkedin.com/in/luis-rodrigo-vaquin-624933328" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            </a>
                            <a href="https://github.com/luisvaquin">
                                <GitHubIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            </a>
                            <button onClick={handleOpenPopup} className="flex items-center">
                                <CallIcon className="text-blue-600" fontSize="large" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            </button>
                            <PhonePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
                            {/* Enlace para enviar un correo */}
                            <a href="mailto:luisrodrigo2330@gmail.com">
                                <MarkEmailUnreadIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            </a>
                            <FindInPageIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />

                        </div>
                    </div>


                </div>
            </div>

            {showButton && (
                <div className="flex items-end justify-end fixed bottom-5 right-5 z-10">
                    <div>
                        <button
                            title="Regresar arriba"
                            onClick={scrollToTop} // Se llama a la función para hacer scroll suave
                            className="block w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] rounded-full transition-transform
                            transform hover:scale-110 hover:rotate-12"
                        >
                            <div className="w-full h-full rounded-full bg-blue-500 flex justify-center items-center shadow-lg">
                                <KeyboardDoubleArrowUpIcon />
                            </div>
                        </button>
                    </div>
                </div>
            )}
            <AboutMeR />
        </>
    );
};

export default HomePage;