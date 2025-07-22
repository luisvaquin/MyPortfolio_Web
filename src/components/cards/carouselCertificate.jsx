import React, { useState, useEffect } from 'react';

const CarouselCertificate = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const imageUrls = [
      'https://i.postimg.cc/zB4J8XW0/certi-Cisco-Segu.jpg',
      'https://i.postimg.cc/0QV8302R/Certificate-for-Luis-Vaquin-Segurity-page-0001.jpg',
      'https://i.postimg.cc/6QjWbhQs/certi-Cisco-IA.jpg',
      'https://i.postimg.cc/KcgGQBSV/certi-Ciber-Platzi.jpg',
      'https://i.postimg.cc/qMVkFqp7/certi-Platzi.jpg',
      'https://i.postimg.cc/VvMz6QW1/CertiPL.jpg',
      'https://i.postimg.cc/4dYJDhKY/certi-Platzi-Marc.jpg',
      'https://i.ibb.co/jkFPgDPB/Luis-Rodrigo-Vaquin-Bacajol-1-1-page-0001.jpg'
    ];

    Promise.all(
      imageUrls.map(
        (url) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => reject(url);
          })
      )
    )
      .then(setImages)
      .catch((err) => console.error('Error loading images:', err));
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-8">
      {/* Carrusel de imágenes */}
      <div className="relative overflow-hidden rounded-xl shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain rounded-xl bg-black"
            />
          </div>
        ))}

        {/* Botones de navegación */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full shadow-md transition"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full shadow-md transition"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCertificate;
