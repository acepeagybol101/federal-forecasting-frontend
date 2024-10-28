import React from "react";

import {
  HiMagnifyingGlass,
  HiOutlineAdjustmentsVertical,
} from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsPinMap } from "react-icons/bs";
import Show from "./components/show";
import Filter from "./components/filter";

const Grow = () => {
  return (
    <div>
      <div className="bg-[url('/images/bg-grow.png')] bg-[#03537D] h-56 md:h-[706px]">
        <div className="bg-[#03537D] h-full bg-opacity-85">
          <div className="flex items-center h-full px-6 lg:px-0 ">
            <div className="m-auto space-y-5 lg:space-y-16">
              <h1 className="text-xl lg:text-[55px] font-semibold italic text-white text-center pb-5 p-2 w-[295px] lg:w-full mx-auto">
                GROW YOUR BUSINESS. EXPAND YOUR NETWORK
              </h1>
              <div className="relative h-7 lg:h-14 w-[375px] lg:w-[834px] m-auto">
                <Input
                  className="rounded-full h-7 lg:h-full lg:pl-8 focus-visible:ring-0 focus-visible:ring-offset-0 text-[10px] lg:text-sm"
                  placeholder="Search here"
                />
                <div className="absolute flex right-0 top-0 bottom-0 m-auto">
                  <Filter>
                    <HiOutlineAdjustmentsVertical className="m-auto h-6 w-6 lg:h-10 lg:w-10 mr-3" />
                  </Filter>
                  <div className=" bg-primary rounded-r-full h-full w-12 lg:w-28 flex">
                    <HiMagnifyingGlass className="m-auto h-5 w-5 lg:h-10 lg:w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-[50px] pt-3 lg:pt-8">
        <div className="flex items-center pb-4 border-b border-gray-300 space-y-2 md:space-y-0">
          <h2 className="font-semibold text-sm lg:text-[40px] pb-0 lg:pb-4">
            DIRECTORIES
          </h2>
          <div className="ml-auto flex items-center gap-5">
            <button className="bg-gray-300 text-[10px] lg:text-lg py-1 px-3 lg:py-2 lg:px-5 rounded-full">
              My Directory
            </button>
            <button className="bg-primary text-[10px] lg:text-lg text-white py-1 px-3 lg:py-2 lg:px-5 rounded-full">
              Add New Directory
            </button>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-14 pt-5 lg:pt-14 pb-28 px-6 md:px-14">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <Show key={key}>
              <div className="bg-white p-2 lg:p-4 rounded-3xl shadow-xl cursor-pointer">
                <div className="flex items-center">
                  <Image
                    src="/images/sdvosb-logo.png"
                    width={134}
                    height={134}
                    alt="Logo"
                    className="w-[89px] h-auto lg:w-[134px] lg:h-[134px] m-auto md:m-0"
                  />
                  <div className="w-full pl-4 pt-4 md:pt-0">
                    <h5 className="font-semibold text-sm lg:text-3xl">
                      DV SOLUTIONS LLC
                    </h5>
                    <p className="text-xs lg:text-2xl font-semibold text-gray-500">
                      CONSTRUCTION
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-end">
                        <BsPinMap className="w-5 h-5 lg:w-7 lg:h-7 mr-2" />
                        <span className="text-xs lg:text-xl font-semibold">ARKANSAN</span>
                      </div>
                      <button className="text-gray-500 text-xs lg:text-2xl ml-auto pr-3">
                        view
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Show>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grow;
