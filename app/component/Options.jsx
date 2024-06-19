import Image from 'next/image';

const FourElements = () => {
  return (
    <div className="relative md:w-full mx-auto flex justify-center md:h-[180px] h-[350px] md:mt-[-50px]" id='four-elements'>
      {/* Overlay Background */}
      <div className="absolute top-0 left-0 w-full md:h-[180px] h-[350px] bg-[#F4F9FF] z-0"></div>

      {/* Content Container */}
      <div className="relative lg:w-[1121px] md:h-[180px] h-[350px] md:p-12 pt-20 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          <div className="flex flex-col items-center text-[#00357B]">
            <Image src="/vector1.svg" alt="Vector 1" width={40} height={40} />
            <p className="text-center text-sm">BOOK WITH</p>
            <h2 className="text-2xl border-b-4 font-bold">ONLY 20%</h2>
          </div>
          <div className="flex flex-col items-center text-[#00357B]">
            <Image src="/vector2.svg" alt="Vector 2" width={40} height={40} />
            <p className="text-center text-sm">PAYMENT PLAN</p>
            <h2 className="text-2xl border-b-4 font-bold">EASY 70/30</h2>
          </div>
          <div className="flex flex-col items-center text-[#00357B]">
            <Image src="/vector3.svg" alt="Vector 3" width={40} height={40} />
            <p className="text-center text-sm">HANDOVER ON</p>
            <h2 className="text-2xl border-b-4 font-bold">Q2 2027</h2>
          </div>
          <div className="flex flex-col items-center text-[#00357B]">
            <Image src="/vector4.svg" alt="Vector 4" width={40} height={40} />
            <p className="text-center text-sm">AREA STARTS FROM</p>
            <h2 className="text-2xl border-b-4 font-bold">700 SQMT</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourElements;
