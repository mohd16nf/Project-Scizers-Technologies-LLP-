'use client'

// Lightbox code here

import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white bg-opacity-75 text-gray-600 hover:text-gray-900 rounded-full p-2 focus:outline-none"
        >
          <FaTimes />
        </button>
        <Image
          src={image}
          alt="Lightbox Image"
          width={1122}
          height={494}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Lightbox;
