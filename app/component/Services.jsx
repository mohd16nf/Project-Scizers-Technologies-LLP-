import Image from 'next/image';

const Services = () => {
  return (
    <div className="md:p-12 px-8 pt-4 mx-auto xl:w-[1121px]" id='services'>
      <h1 className="text-3xl text-center text-[#00357B] tracking-widest font-bold">HARBOUR <br /> LIGHTS</h1>
      <p className="text-center text-xs text-[#00357B] leading-none" style={{fontSize:'11px'}}>de GRISOGONO <br /><span style={{fontSize:'6px'}} className='leading-none'>GENEVE</span></p>
      <div className='w-full md:px-40 px-0'>
      <h2 className="md:text-4xl text-[26px] font-bold text-center text-[#00357B] mt-8" >FEATURES & AMENITIES</h2>
      <p className="mt-4 text-center">
        Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="bg-white p-6 shadow-md rounded-lg flex justify-center flex-col items-center text-[#00357B]">
          <Image src="/cardimg1.png" alt="Feature 1" width={200} height={200} className="rounded-full" />
          <h3 className="md:text-xl text-m font-semibold mt-4 text-center">Floating Pools</h3>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg flex justify-center flex-col items-center text-[#00357B]">
          <Image src="/cardimg2.png" alt="Feature 2" width={200} height={200} className="rounded-full" />
          <h3 className="md:text-xl text-m font-semibold mt-4 text-center">Spacious Cabins Like Rooms</h3>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg flex justify-center flex-col items-center text-[#00357B]">
          <Image src="/cardimg3.jpg" alt="Feature 3" width={200} height={200} className="rounded-full" />
          <h3 className="md:text-xl text-m font-semibold mt-4 text-center">Sea Facing Swimming Pools</h3>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg flex justify-center flex-col items-center text-[#00357B]">
          <Image src="/cardimg4.jpg" alt="Feature 4" width={200} height={200} className="rounded-full" />
          <h3 className="md:text-xl text-m font-semibold mt-4 text-center">Gymnasium & Fitness</h3>
        </div>
      </div>
      <p style={{fontSize:'9px'}} className='md:text-end text-center m-4 mb-10'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
      <div className="flex md:justify-end justify-center mt-4">
        <button className="bg-[#00357B] text-xs text-white py-2 md:mb-0 mb-4 px-8 rounded mr-6 border-2 hover:border-[#00357B] hover:bg-white hover:text-[#00357B] hover:font-bold transition duration-500 ease-in-out">EXTERIORS</button>
        <button className="text-[#00357B] text-xs border-2 py-2 md:mb-0 mb-4 px-8 rounded hover:bg-[#00357B] hover:text-white hover:font-bold transition duration-500 ease-in-out">INTERIORS</button>
    </div>
    </div>
  );
};

export default Services;
