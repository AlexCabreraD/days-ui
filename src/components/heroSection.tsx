import heroImage from "@/assets/hero-2.png";

const HeroSection = () => {
  return (
    <div
      className="h-screen text-white flex md:items-center justify-center bg-cover bg-center bg-fixed top-0 border-t border-black"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 0) 100%), url(${heroImage.src})`,
      }}
    >
      <div className="text-center px-4 py-8 rounded transform sm:mt-[110px] md:-translate-y-[60px]">
        {/* Main Title */}
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest italic">
          DAY'S ADVANCED AUTOMOTIVE
        </h1>

        <div className="flex gap-0 xl:gap-[354px] md:my-[32px]">
          <hr className="border-[1.3px] border-red-600 flex-1 md:-translate-x-[150px]" />
          <hr className="border-[1.3px] border-red-600 flex-1 md:translate-x-[150px]" />
        </div>

        {/* Description Text */}
        <p className=" my-2 md:my-4 max-w-lg sm:max-w-xl lg:max-w-[1440px] mx-auto text-base sm:text-lg md:text-xl lg:text-2xl">
          At Day's Advanced Automotive, we combine expertise with affordability
          to provide top-notch auto repair services. Our ASE certified
          technicians are dedicated to getting you back on the road safely and
          efficiently.
        </p>

        <div className="flex gap-[0px] lg:gap-[380px] xl:gap-[800px] md:mt-[32px]">
          <hr className="border-[1.3px] border-blue-600 flex-1 md:-translate-x-[150px]" />
          <hr className="border-[1.3px] border-blue-600 flex-1 md:translate-x-[150px]" />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 md:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded w-full sm:w-auto">
            Schedule Service
          </button>
          <button className="border-2 border-white px-6 py-3 rounded text-white hover:bg-white hover:text-black w-full sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
