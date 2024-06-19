import Image from 'next/image';
import image from '../../public/heropage.jpg';

const Heropage = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 inset-0 w-full md:h-[658px] h-[808px] z-0">
        <Image
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="fixed"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-9 w-full md:h-[658px] h-[808px]" style={{ background: 'linear-gradient(89.99deg, rgba(6, 35, 73, 0.64) 16.84%, rgba(24, 141, 249, 0) 60.2%)' }}></div>

      {/* Content */}
      <div className="relative max-w-screen-lg xl:mx-auto md:mx-8 flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center h-[658px] md:mt-[30px] mt-[120px] text-white z-9">
        <div className="flex flex-col space-y-4 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold md:leading-normal leading-snug">
            HARBOUR LIGHTS <br /> DE <span className='text-[#17ABFF]'>GRESOGONO</span>
          </h1>
          <h2 className="md:text-xl text-sm font-bold pb-4">1, 2 & 3 Bedrooms Seaside Apartments <br />in Dubai Maritime City</h2>
          <div className="flex items-start">
            <div className="w-1 bg-blue-500" style={{ height: 'calc(1em + 16px)' }}></div>
            <p className="px-2 py-2">Rental Returns of UPTO 11%**</p>
          </div>
          <div className="flex items-start">
            <div className="w-1 bg-blue-500" style={{ height: 'calc(1em + 16px)' }}></div>
            <p className="px-2 py-2">Capital Appreciation of UPTO 32%**</p>
          </div>
        </div>
        <div className=" bg-[#5790BE] bg-opacity-50 w-[303.08px] h-[321px] flex flex-col justify-start rounded mt-6 md:mb-0">
          <div className='px-6 pt-8'>
            <p className='text-gray-300 pb-2' style={{fontSize:'12px'}}> PRICING STARTS FROM</p>
            <h2 className="text-4xl font-bold pb-2">$ 425,000</h2>
            <h4 className="text-m mb-4">AED 1.3 Million</h4>
          </div>
          <button className="bg-blue-500 text-white-500 py-3 px-8 mt-4 mx-6 rounded hover:bg-blue-700 hover:text-white-700 hover:font-bold transition duration-700 ease-in-out" style={{fontSize:'12px'}}>GET A PRESENTATION</button>
          <div className=" w-full flex items-end pt-5 mt-12 px-6 border-t-2 border-t-gray-500">
            <p className='text-[#98C5E8] text-xs'>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heropage;
