import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import CarouselCertificate from '../components/cards/carouselCertificate';

const IconEducation = () => {
    return (
        <SchoolIcon className='mr-auto mb-2' style={{ fontSize: 35, color: '#88DC65' }} />
    );
}

const SectionEducation = () => {
    return (
        <>
            <section className="text-white bg-[#161513] body-font mt-[-1rem]">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">Education</h2>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-[5rem] h-[5rem] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                <img src="https://static.wixstatic.com/media/128120_082b0a9600da4e99a6462def860f2a6e~mv2.png/v1/fill/w_320,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Fundacion%20KinalBlanco.png" alt="" />
                            </div>
                            <h2 className="text-white text-lg title-font font-medium mb-2">Kinal</h2>
                        </div>

                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-[5rem] h-[5rem] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                <img src="https://static.cdnlogo.com/logos/c/21/cisco-systems.png" alt="" />
                            </div>
                            <h2 className="text-white text-lg title-font font-medium mb-2">Cisco Network Academy</h2>
                        </div>

                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-[5rem] h-[5rem] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                <img src="https://dondecurso.com/wp-content/uploads/2021/03/cropped-logo-dondecurso.png" alt="" />
                            </div>
                            <h2 className="text-white text-lg title-font font-medium mb-2">Donde Curso-PL</h2>
                        </div>

                        <div className="p-4 md:w-1/3 flex">
                            <div className="w-[5rem] h-[5rem] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                <img src="https://citadelid-resources.s3.amazonaws.com/website-company-logos/platzi.png" alt="" className='rounded-full' />
                            </div>
                            <h2 className="text-white text-lg title-font font-medium mb-2">Course Platzi</h2>
                        </div>

                    </div>
                </div>
            </section>

            <CarouselCertificate />
        </>

    );
}

export default SectionEducation;
