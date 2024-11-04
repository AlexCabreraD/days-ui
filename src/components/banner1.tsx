import Image from "next/image";
import banner from "@/assets/banner1.png";
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
      <div className="h-[363px] relative -translate-y-[413px] -z-10">
        <Image
          className="object-cover w-full h-auto"
          src={banner.src}
          layout={"fill"}
          alt="Modern Super Cars Banner"
        />
      </div>
      <div className="bg-red-600 h-[265px] -translate-y-[513px] flex flex-col items-center text-center py-[64px] gap-[16px]">
        <span className="text-[18px] text-white font-bold">
          Some of the Car Brands We Service
        </span>
        <div className="overflow-hidden relative w-full h-full text-white">
          <div className="row flex">
            <div className="stack animate-left">
              <SiNissan className="icon" />
              <SiFord className="icon" />
              <SiToyota className="icon" />
              <CgBmw className="icon" />
              <SiMazda className="icon" />
              <SiAudi className="icon" />
              <SiChevrolet className="icon" />
              <SiMercedes className="icon" />
              <SiVolkswagen className="icon" />
              <SiChrysler className="icon" />
              <SiAcura className="icon" />
              <SiHonda className="icon" />
              <SiHyundai className="icon" />
            </div>
            <div className="stack animate-left">
              <SiNissan className="icon" />
              <SiFord className="icon" />
              <SiToyota className="icon" />
              <CgBmw className="icon" />
              <SiMazda className="icon" />
              <SiAudi className="icon" />
              <SiChevrolet className="icon" />
              <SiMercedes className="icon" />
              <SiVolkswagen className="icon" />
              <SiChrysler className="icon" />
              <SiAcura className="icon" />
              <SiHonda className="icon" />
              <SiHyundai className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
