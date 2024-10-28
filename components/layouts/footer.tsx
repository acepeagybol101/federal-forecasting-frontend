import * as React from "react";

import Image from "next/image";
import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center py-5 md:py-8 space-x-6 md:space-x-12 p-2 md:px-8 xl:px-20 2xl:px-40 bg-white">
        <div>
          <Image
            src="/images/sba-logo.png"
            width={80}
            height={0}
            alt="Logo"
            className="w-[40px] md:w-[80px]"
          />
        </div>
        <div>
          <Image
            src="/images/sdvosb-logo.png"
            width={110}
            height={0}
            alt="Logo"
            className="w-[55px] md:w-[110px]"
          />
        </div>
        <div>
          <Image
            src="/images/arkansas-logo.png"
            width={100}
            height={0}
            alt="Logo"
            className="w-[50px] md:w-[100px]"
          />
        </div>
      </div>
      <div className="bg-secondary p-2 md:px-8 xl:px-20 2xl:px-40 ">
        <div className="flex flex-col items-center space-y-2 md:space-y-4 py-6 md:py-12 border-b-2 border-[#1c5583] md:text-4xl text-lg">
          <div className="flex space-x-4">
            <div className="px-10 md:px-0">
              <Image
                src="/images/federal-logo-white.png"
                width={346}
                height={0}
                alt="Logo"
                className="w-[143px] h-[77px] md:w-[346px] md:h-[179px]"
              />
            </div>
          </div>
          <p className="text-white font-medium text-[10px] md:text-xl">
            120 E. Washington St, Camden, AR 71701
          </p>
          <p className="text-white font-medium text-[10px] md:text-xl">123 456 7890</p>
          <p className="text-white font-medium text-[10px] md:text-xl">info@DerrickSuratt.com</p>
          <div className="text-white font-medium pt-3 flex space-x-4">
            <FaXTwitter className="border p-1 md:p-3 rounded-full h-6 md:h-auto w-6 md:w-12" />
            <FaFacebookF className="border p-1 md:p-3 rounded-full h-6 md:h-auto w-6 md:w-12" />
            <FaLinkedinIn className="border p-1 md:p-3 rounded-full h-6 md:h-auto w-6 md:w-12" />
            <FaYoutube className="border p-1 md:p-3 rounded-full h-6 md:h-auto w-6 md:w-12" />
          </div>
        </div>
        <div className="flex md:text-center text-white py-4 md:pt-8 md:pb-4">
          <p className="md:pb-3 text-[9px] md:text-xl">
            © 2024 Federal Forecasting App. All Rights Reserved.
          </p>
          <p className="ml-auto text-[9px] md:text-xl">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
