'use client'

// Image slider and lightbox implementation code.

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Lightbox from './Lightbox'; // Import Lightbox component

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null); // State to handle lightbox image

  const images = [
    '/slider1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg',
    '/slide5.jpg'
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newIndex);
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto relative">
        {/* Main Slider Image */}
        <div className="relative">
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            width={1122}
            height={494}
            layout="responsive"
            className="rounded-lg"
            onClick={() => openLightbox(images[currentSlide])} // Open lightbox on click
          />
        </div>

        {/* Arrows for navigation */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-60 text-gray-600 hover:text-gray-900 hover:bg-opacity-90 rounded-full p-2 focus:outline-none"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-60 text-gray-600 hover:text-gray-900 hover:bg-opacity-90 rounded-full p-2 focus:outline-none"
          >
            <FaChevronRight className=" bg-transparent" />
          </button>
        </div>

        {/* Thumbnails for other slides */}
        <div className="grid grid-cols-5 gap-4 mt-4 mb-10">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`relative overflow-hidden rounded-lg border-2 border-transparent ${
                index === currentSlide ? 'border-blue-500' : ''
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={224}
                height={124}
                layout="responsive"
                onClick={() => openLightbox(image)} // Open lightbox on click
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
    </>
  );
};

export default ImageSlider;
