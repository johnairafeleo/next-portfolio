import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[1000px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src="/horseLogo.jpg"
          alt="logo"
          width={40}
          height={40}
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <h1 className="text-white text-[25px] font-semibold">Webchain Dev</h1>
      <div className="flex flex-row gap-5 mb-2"></div>
    </div>
  );
};

export default Navbar;
