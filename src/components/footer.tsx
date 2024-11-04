const Footer = () => {
  return (
    <div className={"bg-black w-full text-center mt-[170px]"}>
      <div className="bg-black text-white py-[64px] max-w-[1440px] w-full place-self-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[20px] font-bold">DAY'S ADVANCED AUTOMOTIVE</div>

          <nav className="space-x-8 hidden md:flex">
            <a href="#" className="hover:underline font-semibold text-[14px]">
              Home
            </a>
            <a href="#" className="hover:underline font-semibold text-[14px]">
              Contact Us
            </a>
            <a href="#" className="hover:underline font-semibold text-[14px]">
              Services
            </a>
            <a href="#" className="hover:underline font-semibold text-[14px]">
              About Us
            </a>
          </nav>
        </div>
      </div>
      <div className={"border-t max-w-[1440px] w-full place-self-center"}></div>
      <footer className="bg-black text-white max-w-[1440px] w-full place-self-center">
        <p className={"text-[14px] pt-[32px] pb-[64px]"}>
          &copy; 2024 Day's Advanced Automotive. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
