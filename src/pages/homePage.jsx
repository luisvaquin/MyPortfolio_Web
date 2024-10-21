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

    return (
        <>
            <NavbarNavigate />
            <div
                className="flex flex-col justify-center items-center min-h-screen bg-[#161513]"
                id="idHomePage"
                ref={homePageRef} // Referencia al inicio de la página
            >
                <div className="mx-auto text-center mt-[2rem] sm:mt-[3rem]">
                    <div className="mx-auto mb-6 sm:mb-8 h-[12rem] sm:h-[14rem] w-[12rem] sm:w-[14rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#0E3386] to-[#00CED1]">
                        <img src="/iconLr1.png" alt="" className="h-[100%] w-[17rem] object-cover" />
                    </div>
                    <div>
                        <h1 ref={textRef} className="max-w-screen-md text-[2rem] sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6"></h1>
                    </div>
                    <div className="mt-[2rem]">
                        <div className="flex gap-5 justify-center">
                            <LinkedInIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            <InstagramIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            <GitHubIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            <CallIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                            <MarkEmailUnreadIcon color="secondary" style={{ fontSize: 35, color: '#FFFFFF' }} />
                        </div>
                    </div>
                    <div>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00CED1] to-[#0E3386] animate-wave text-[1.9em] sm:text-4xl lg:text-5xl font-extrabold mt-[1.7rem]">
                            Frontend Developer
                        </span>
                    </div>
                    <div className="flex gap-[2rem] justify-center max-[1000px]:gap-[15px] mt-[2rem] max-[1000px]:mt-[1.5rem]">
                        <Button variant="outlined" size="medium" className="animate-pulse" href="https://tailwindcss.com/docs/flex-direction">DESCARGA MI CV</Button>
                        <Button variant="outlined" size="medium">VER PROYECTOS</Button>
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
            <AboutMe />
        </>
    );
};

export default HomePage;