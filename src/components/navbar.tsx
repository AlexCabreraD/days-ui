const Navbar = () => {
  return (
    <div className="w-full flex flex-col justify-center py-[16px] text-white bg-black border-b-2 border-black border-opacity-5">
      <a href={"/"} className="block text-center font-bold text-xl">
        <span className="block text-[15px] sm:hidden">
          Day's Advanced Automotive
        </span>
      </a>
      <div className="mt-[8px] md:mt-0 flex flex-row justify-between items-center place-self-center max-w-[1440px] w-full">
        <a
          href={"/"}
          className="flex flex-col justify-between text-center font-bold text-xl"
        >
          <span className="hidden sm:block text-[15px] md:text-[20px]">
            Day's Advanced
          </span>
          <span className="hidden sm:block text-[15px] md:text-[20px]">
            Automotive
          </span>
        </a>
        <div className="flex flex-row space-x-[32px] font-bold w-full justify-between mx-[16px] sm:w-fit sm:mx-[0px]">
          <a
            href={"/"}
            className={
              "border-b-2 border-transparent hover:border-white transition text-[12px] md:text-[16px]"
            }
          >
            Home
          </a>
          <a
            href={"#"}
            className={
              "border-b-2 border-transparent hover:border-white transition text-[12px] md:text-[16px]"
            }
          >
            Services
          </a>
          <a
            href={"#"}
            className={
              "border-b-2 border-transparent hover:border-white transition text-[12px] md:text-[16px]"
            }
          >
            Our Story
          </a>
        </div>
        <div>
          <button
            className={
              "hidden sm:inline border-2 border-red-600 rounded-full px-[16px] py-[8px] font-bold hover:bg-red-600 transition text-[12px] md:text-[16px]"
            }
          >
            Schedule Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
