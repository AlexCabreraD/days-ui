import { FaChevronRight } from "react-icons/fa6";
import Banner2 from "@/components/banner2";
import worker from "@/assets/worker.png";
import Image from "next/image";

const Quality = () => {
  return (
    <div>
      <Banner2 />
      <div
        className={
          "px-[16px] py-[32px] md:p-[64px] -mt-[150px] flex flex-col justify-center text-center w-full max-w-[1440px] bg-black content-center place-self-center rounded-[10px] shadow-custom-shadow"
        }
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-black text-white text-center md:text-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h3
              className={
                "font-bold text-[16px] mb-[8px] text-gray-600 tracking-widest uppercase"
              }
            >
              Quality
            </h3>
            <h1 className="text-[25px] sm:text-[35px] md:text-[40px] font-bold mb-4 text-white">
              Comprehensive Auto Services You Can Trust
            </h1>
            <p className="mb-6 text-[14px] text-gray-300">
              At Day's Advanced Automotive, we specialize in a wide range of
              services, from auto emissions testing to intricate repairs. Our
              experienced technicians are dedicated to providing reliable
              solutions that keep your vehicle running smoothly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="font-semibold text-[18px] md:text-[24px] text-white">
                  Emissions Testing
                </h2>
                <p className="text-sm text-gray-300">
                  Ensure your vehicle meets state regulations with our thorough
                  emissions testing services.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-[18px] md:text-[24px] text-white">
                  Complex Repairs
                </h2>
                <p className="text-sm text-gray-300">
                  From engine issues to transmission repairs, we handle it all
                  with expertise.
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors">
                Schedule Service
              </button>
              <button className="px-6 py-2 border-b-2 border-transparent text-white hover:border-white hover:text-white transition-colors">
                Get in touch <FaChevronRight className={"inline"} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={worker.src}
              alt="Technician working on a car"
              className="w-full rounded-lg shadow-lg transform transition-transform hover:scale-105"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
