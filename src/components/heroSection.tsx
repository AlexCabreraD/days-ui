import heroImage from "@/assets/hero-2.png";

const HeroSection = () => {
  return (
    <div
      className=" h-screen text-white flex items-center justify-center bg-cover bg-center bg-fixed top-0"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .9) 10%, rgba(0, 0, 0, 0) 100%), url(${heroImage.src})`,
      }}
    >
      <div className="text-center px-4 p-8 rounded -translate-y-[50px]">
        <h1 className="text-5xl md:text-[100px] font-bold tracking-widest italic">
          DAY'S ADVANCED AUTOMOTIVE
        </h1>
        <div className="flex gap-[354px] m-[16px]">
          <hr className="border-[1.3px] border-red-600 flex-1 -translate-x-[150px]" />
          <hr className="border-[1.3px] border-red-600 flex-1 translate-x-[150px]" />
        </div>

        <p className="mt-4 max-w-[1189] mx-auto text-[25px] ">
          At Day's Advanced Automotive, we combine expertise with affordability
          to provide top-notch auto repair services. Our ASE certified
          technicians are dedicated to getting you back on the road safely and
          efficiently.
        </p>

        <div className="flex gap-[1054px] m-[16px]">
          <hr className="border-[1.3px] border-blue-600 flex-1 -translate-x-[150px]" />
          <hr className="border-[1.3px] border-blue-600 flex-1 translate-x-[150px]" />
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
            Schedule Service
          </button>
          <button className="border-2 border-white px-6 py-3 rounded text-white hover:bg-white hover:text-black">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
