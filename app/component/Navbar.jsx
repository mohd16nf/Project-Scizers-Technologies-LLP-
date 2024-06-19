'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 z-10 bg-transparent" id='navbar'>
      <div className="max-w-screen-lg xl:mx-auto md:mx-8 xl:px-0 px-5 md:h-24 h-18 md:mt-0 mt-4 flex justify-between items-end">
        <div className="text-3xl font-bold text-white italic">DAMAC</div>
        <div className="hidden md:block">
          <button className="text-blue-500 text-sm font-bold border-2 border-blue-500 px-6 py-2 rounded cursor-pointer hover:text-blue-700 hover:bg-white transition duration-700 ease-in-out">
            Explore Now
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#00357B] text-black px-5 py-8 md:mx-12 mx-5 mt-2 space-y-1 sm:px-3 rounded z-10">
          <button className="block px-4 py-2 rounded text-white border-2 border-white-400 hover:border-[#00357B] hover:bg-white cursor-pointer hover:text-[#00357B] hover:font-bold transition duration-500 ease-in-out">
            Explore Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
