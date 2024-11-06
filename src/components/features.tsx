import { FaCar, FaHandshake, FaThumbsUp } from "react-icons/fa";
import Banner1 from "@/components/banner1";

const Features = () => {
  return (
    <>
      <div className={"w-full z-10"}>
        <div
          className={
            "p-[64px] md:py-[128px] flex flex-col items-center w-full max-w-[1440px] bg-white rounded-[10px] -mt-[100px] shadow-custom-shadow text-center md:text-start place-self-center"
          }
        >
          <div className={"max-w-[768px] place-self-center mb-8"}>
            <h3
              className={
                "font-bold text-[16px] mb-[8px] text-gray-600 tracking-widest uppercase"
              }
            >
              Expertise
            </h3>
            <h2
              className={
                "text-[25px] sm:text-[35px] md:text-[40px] font-bold mb-[32px] text-gray-800"
              }
            >
              Experience Unmatched Quality with Our ASE Certified Automotive
              Technicians
            </h2>
          </div>
          <div className={"max-w-[1183px] place-self-center"}>
            <div className={"max-w-[1183px] place-self-center"}>
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-stretch">
                {/* Feature 1 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex-1 text-center md:text-start transform transition-transform hover:scale-105">
                  <div className="flex justify-center md:justify-start">
                    <FaCar size={40} className="text-[#000000] mb-4" />
                  </div>
                  <h4 className="text-[18px] md:text-[24px] font-bold mb-[8px] text-gray-800">
                    Expert Service at a Fair Price
                  </h4>
                  <span className="text-[14px] text-gray-600">
                    Our certified technicians deliver top-tier service with a
                    cost-effective approach.
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex-1 text-center md:text-start transform transition-transform hover:scale-105">
                  <div className="flex justify-center md:justify-start">
                    <FaHandshake size={40} className="text-[#000000] mb-4" />
                  </div>
                  <h4 className="text-[18px] md:text-[24px] font-bold mb-[8px] text-gray-800">
                    Trustworthy Service with a Personal Touch
                  </h4>
                  <span className="text-[14px] text-gray-600">
                    We prioritize building relationships, offering you peace of
                    mind with every service.
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex-1 text-center md:text-start transform transition-transform hover:scale-105">
                  <div className="flex justify-center md:justify-start">
                    <FaThumbsUp size={40} className="text-[#000000] mb-4" />
                  </div>
                  <h4 className="text-[18px] md:text-[24px] font-bold mb-[8px] text-gray-800">
                    Keep Your Vehicle Running Smoothly
                  </h4>
                  <span className="text-[14px] text-gray-600">
                    We ensure reliable repairs, so you can drive with
                    confidence, knowing your vehicle is in good hands.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-10">
            <button className="px-6 py-3 bg-[#000000] text-white rounded-full text-[16px] font-bold hover:bg-[#b8972f] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Banner1 />
    </>
  );
};

export default Features;
