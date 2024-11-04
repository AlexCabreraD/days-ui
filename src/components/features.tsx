import Image from "next/image";
import carImg from "@/assets/servicesCar.png";
import Banner1 from "@/components/banner1";
import Banner2 from "@/components/banner2";

const Features = () => {
  return (
    <>
      <div className={"w-full z-10"}>
        <div
          className={
            "p-[64px] flex flex-col justify-center w-full max-w-[1440px] bg-white content-center place-self-center rounded-t-[10px] -translate-y-[150px] shadow-custom-shadow text-start"
          }
        >
          <div className={"max-w-[768px] place-self-center"}>
            <h3 className={"font-bold text-[16px] mb-[8px] text-start"}>
              Expertise
            </h3>
            <h2 className={"text-[40px] font-bold mb-[32px] max-w-[770px]"}>
              Experience Unmatched Quality with Our ASE Certified Automotive
              Technicians
            </h2>
          </div>
          <div className={"max-w-[1183px] place-self-center"}>
            <div className="flex flex-row items-center space-x-8">
              <div>
                <h4 className="text-[24px] font-bold mb-[16px]">
                  Expertise from a Local Dealership Without the High Price Tag
                </h4>
                <span className="text-[16px]">
                  Our ASE certified technicians bring dealership-level expertise
                  to every repair.
                </span>
              </div>

              <div className="h-[215px] w-[2px] rounded border-r-[2px] border-black"></div>

              <div>
                <Image
                  src={carImg.src}
                  height={500}
                  width={500}
                  alt="Picture of the author"
                  className="rounded-[75px]"
                />
              </div>

              <div className="h-[215px] w-[2px] rounded border-r-[2px] border-black"></div>

              <div>
                <h4 className="text-[24px] font-bold mb-[16px]">
                  Get Your Vehicle Back on the Road with Confidence
                </h4>
                <span className="text-[16px]">
                  We ensure your vehicle receives the best care at an affordable
                  price.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner1 />
    </>
  );
};

export default Features;
