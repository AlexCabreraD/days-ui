import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

import { FaChevronRight } from "react-icons/fa6";

import mapImg from "@/assets/map.jpg";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="mt-[128px] flex flex-col lg:flex-row p-8 bg-white max-w-[1440px] w-full place-self-center relative z-0">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <h3
          className={
            "font-bold text-[16px] mb-[8px] text-gray-600 tracking-widest uppercase"
          }
        >
          Contact
        </h3>
        <h1 className="text-[48px] font-bold text-black">Get in Touch</h1>
        <p className="text-[18px] mb-[32px] text-gray-700">
          Reach out to us for any automotive needs.
        </p>

        <div className="space-y-[32px]">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <FiMail size={35} />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-black">Email</h2>
              <p className="text-[18px] text-gray-700">
                info@daysadvancedautomotive.com
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <FiPhone size={35} />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-black">Phone</h2>
              <p className="text-[18px] text-gray-700">
                Call us for inquiries.
              </p>
              <p className="text-[18px] text-gray-700">+1 (801) 555-1234</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <TfiLocationPin size={35} />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-black">Office</h2>
              <p className="text-[18px] text-gray-700">
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
        <Image
          src={mapImg.src}
          alt="Map showing Day's Advanced Automotive location"
          className="w-full rounded-lg shadow-lg"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default ContactSection;
