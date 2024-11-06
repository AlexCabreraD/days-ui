import Image from "next/image";
import banner from "@/assets/banner2.png";

const Banner2 = () => {
  return (
    <div className="h-[363px] relative -z-10">
      <Image
        className="object-cover w-full h-auto"
        src={banner.src}
        fill
        alt="Modern Super Cars Banner"
      />
    </div>
  );
};

export default Banner2;
