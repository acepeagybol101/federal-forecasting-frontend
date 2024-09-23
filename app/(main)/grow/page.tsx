import React from "react";
import {
  HiMagnifyingGlass,
  HiOutlineAdjustmentsVertical,
} from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsPinMap } from "react-icons/bs";
import Show from "@/components/grow/show";
import Filter from "@/components/grow/filter";

const Grow = () => {
  return (
    <div>
      <div className="bg-[url('/images/bg-grow.png')] bg-[#03537D] h-[706px]">
        <div className="bg-[#03537D] h-full bg-opacity-85">
          <div className="flex items-center h-full">
            <div className="m-auto">
              <div className="text-[55px] font-semibold italic text-white text-center pb-5">
                GROW YOUR BUSINESS. EXPAND YOUR NETWORK
              </div>
              <div className="relative w-[834px] m-auto">
                <Input
                  className=" h-[85px] rounded-full text-2xl pl-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search here"
                />
                <div className="absolute flex right-0 top-0 bottom-0 m-auto">
                  <Filter>
                    <HiOutlineAdjustmentsVertical className="m-auto h-10 w-10 mr-3" />
                  </Filter>
                  <div className=" bg-primary rounded-r-full w-28 flex">
                    <HiMagnifyingGlass className="m-auto h-10 w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[50px] pt-8">
        <div className="flex items-center pb-3 border-b border-gray-300">
          <div className="font-semibold text-[40px]">DIRECTORIES</div>
          <div className="ml-auto bg-gray-300 mr-5 py-2 px-5 rounded-full">
            My Directory
          </div>
          <div className="bg-primary text-white py-2 px-5 rounded-full">
            Add New Directory
          </div>
        </div>

        <div className="grid grid-cols-3 gap-14 pt-14 pb-28 px-14">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <Show key={key}>
              <div className="bg-white p-4 rounded-3xl shadow-xl">
                <div className="flex items-center">
                  <Image
                    src="/images/sdvosb-logo.png"
                    width={134}
                    height={134}
                    alt="Logo"
                  />
                  <div className="pl-4">
                    <div className="font-semibold text-3xl">
                      DV SOLUTIONS LLC
                    </div>
                    <div className="text-2xl font-semibold text-gray-500">
                      CONSTRUCTION
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="text-xl font-semibold flex items-end">
                        <BsPinMap className="w-7 h-7 mr-2" />
                        ARKANSAN
                      </div>
                      <div className="text-gray-500 text-2xl ml-auto pr-3">
                        view
                      </div>
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
