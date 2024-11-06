import Image from "next/image";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import {
  SiNissan,
  SiFord,
  SiToyota,
  SiMazda,
  SiAudi,
  SiChevrolet,
  SiMercedes,
  SiVolkswagen,
  SiChrysler,
  SiAcura,
  SiHonda,
  SiHyundai,
} from "react-icons/si";
import { CgBmw } from "react-icons/cg";

const Banner1 = () => {
  return (
    <>
      <div className="h-[363px] relative -z-10 -mt-[100px]">
        <Image
          className="object-cover"
          src={banner1.src}
          layout={"fill"}
          alt="Modern Super Cars Banner"
        />
      </div>
      <div className="bg-red-600 flex flex-col items-center text-center ">
        <div className="overflow-hidden relative w-full h-full text-white">
          <div className="flex">
            <div className="row animate-left">
              <SiNissan className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiFord className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiToyota className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <CgBmw className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiMazda className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiAudi className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiChevrolet className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiMercedes className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiVolkswagen className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiChrysler className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiAcura className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiHonda className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiHyundai className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
            </div>
            <div className="row animate-left">
              <SiNissan className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiFord className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiToyota className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <CgBmw className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiMazda className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiAudi className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiChevrolet className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiMercedes className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiVolkswagen className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiChrysler className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiAcura className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiHonda className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
              <SiHyundai className="w-[75px] h-[75px] md:w-[90px] md:h-[75px] m-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
