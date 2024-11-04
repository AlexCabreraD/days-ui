import { FaChevronRight } from "react-icons/fa6";

import Banner2 from "@/components/banner2";
import worker from "@/assets/worker.png";

const Quality = () => {
  return (
    <div className={"-translate-y-[363px] max-h-[314px]"}>
      <div
        className={
          "p-[64px] flex flex-col justify-center text-center w-full max-w-[1440px] bg-black content-center place-self-center rounded-b-[10px] -translate-y-[150px] shadow-custom-shadow"
        }
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-black text-white text-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <p className="text-sm font-semibold uppercase mb-2">Quality</p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Comprehensive Auto Services You Can Trust
            </h1>
            <p className="mb-6">
              At Day's Advanced Automotive, we specialize in a wide range of
              services, from auto emissions testing to intricate repairs. Our
              experienced technicians are dedicated to providing reliable
              solutions that keep your vehicle running smoothly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="font-semibold text-lg">Emissions Testing</h2>
                <p className="text-sm">
                  Ensure your vehicle meets state regulations with our thorough
                  emissions testing services.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-lg">Complex Repairs</h2>
                <p className="text-sm">
                  From engine issues to transmission repairs, we handle it all
                  with expertise.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                Schedule Service
              </button>
              <button className="px-6 py-2 border-b-2 border-transparent hover:border-white transition">
                Get in touch <FaChevronRight className={"inline"} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={worker.src}
              alt="Technician working on a car"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Banner2 />
    </div>
  );
};

export default Quality;
