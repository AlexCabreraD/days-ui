const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-[16px] fixed top-0 z-10 text-white bg-black bg-opacity-50">
      <div className="flex flex-row justify-between items-center max-w-[1440px] w-full">
        <a href={"/"} className="text-center font-bold text-xl">
          <span className="block">Day's Advanced</span>
          <span className="block">Automotive</span>
        </a>
        <div className="flex flex-row space-x-[32px] font-bold">
          <a
            href={"/"}
            className={
              "border-b-2 border-transparent hover:border-white transition"
            }
          >
            Home
          </a>
          <a
            href={"#"}
            className={
              "border-b-2 border-transparent hover:border-white transition"
            }
          >
            Services
          </a>
          <a
            href={"#"}
            className={
              "border-b-2 border-transparent hover:border-white transition"
            }
          >
            Our Story
          </a>
        </div>
        <div>
          <button
            className={
              "border-2 border-red-600 rounded-full px-[16px] py-[8px] font-bold hover:bg-red-600 transition"
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
