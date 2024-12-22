import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[160px] px-auto pt-16 pb-24 bg-gradient-to-r from-white via-green-50 to-green-100 flex justify-center items-center flex-col border-y-[1px] border-gray-300">
      <div>
        <div className="w-[40px] h-[40px] relative mb-4">
          <Image
            src="/logo.jpg"
            fill={true}
            alt="footer Img"
            className="rounded-full ml-16 bg-transparent"
          ></Image>
        </div>
        <h3>Mohammad Shahil</h3>
      </div>
    </div>
  );
};

export default Footer;
