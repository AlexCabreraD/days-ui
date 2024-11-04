import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

import { FaChevronRight } from "react-icons/fa6";

import mapImg from "@/assets/map.jpg";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-8 bg-white max-w-[1440px] place-self-center mt-[128px]">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <p className="text-[16px] font-semibold uppercase mb-[8px]">Contact</p>
        <h1 className="text-[48px] font-bold">Get in Touch</h1>
        <p className="text-[18px] mb-[32px]">
          Reach out to us for any automotive needs.
        </p>

        <div className="space-y-[32px]">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <FiMail size={35} />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold">Email</h2>
              <p className="text-[18px] text-gray-600">
                info@daysadvancedautomotive.com
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <FiPhone size={35} />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold">Phone</h2>
              <p className="text-[18px] text-gray-600">
                Call us for inquiries.
              </p>
              <p className="text-[18px] text-gray-600">+1 (801) 555-1234</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <TfiLocationPin size={35} />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold">Office</h2>
              <p className="text-[18px] text-gray-600">
                456 Automotive Way, Ogden, UT 84401
              </p>
              <a href="#" className="text-[18px] text-blue-500 hover:underline">
                Get Directions <FaChevronRight size={15} className={"inline"} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex-col content-end">
        <img
          src={mapImg.src}
          alt="Map showing Day's Advanced Automotive location"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;
