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
      <div className="flex items-center justify-center py-5 space-x-6 md:space-x-12 p-2 md:px-8 xl:px-20 2xl:px-40 bg-white">
        <div>
          <Image
            src="/images/sba-logo.png"
            width={80}
            height={0}
            alt="Logo"
            className=""
          />
        </div>
        <div>
          <Image
            src="/images/sdvosb-logo.png"
            width={110}
            height={0}
            alt="Logo"
            className=""
          />
        </div>
        <div>
          <Image
            src="/images/arkansas-logo.png"
            width={100}
            height={0}
            alt="Logo"
            className=""
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
                className=""
              />
            </div>
          </div>
          <div className="text-white font-medium ">
            120 E. Washington St, Camden, AR 71701
          </div>
          <div className="text-white font-medium ">123 456 7890</div>
          <div className="text-white font-medium ">info@DerrickSuratt.com</div>
          <div className="text-white font-medium pt-3 flex space-x-4">
            <FaXTwitter className="border p-3 rounded-full h-auto w-14" />
            <FaFacebookF className="border p-3 rounded-full h-auto w-14" />
            <FaLinkedinIn className="border p-3 rounded-full h-auto w-14" />
            <FaYoutube className="border p-3 rounded-full h-auto w-14" />
          </div>
        </div>
        <div className="block md:flex text-center md:text-xl text-white pt-8 pb-4">
          <div className="pb-3 md:pb-0">
            © 2024 Federal Forecasting App. All Rights Reserved.
          </div>
          <div className="ml-auto">Privacy Policy | Terms of Service</div>
        </div>
      </div>
    </div>
  );
}
