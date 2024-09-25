import React from "react";
import { HiChevronRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

const Member = () => {
  const dummyTabs = ["ALL FRIENDS", "FRIEND REQUESTS", "SUGGESTIONS", "GROUPS"];

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className=" col-span-3 bg-white border-r">
        <div className=" text-3xl text-secondary font-semibold border-b border-gray-300 p-6">
          MEMBERS
        </div>
        <div className="p-6 text-sm">
          {dummyTabs.map((tab) => (
            <div key={tab} className="py-5 flex items-center">
              {tab}
              <HiChevronRight className="ml-auto w-7 h-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className=" col-span-9">
        <div className=" text-3xl text-secondary font-semibold border-b border-gray-300 p-6">
          ALL FRIENDS
        </div>
        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="bg-white rounded-3xl shadow-lg flex p-5">
            <div className="w-[150px] h-[150px] bg-gray-300"></div>
            <div className="px-6 relative">
              <div className="text-2xl">Gabby Roxas</div>
              <div className="py-1">NAICS CODE: 11111000</div>
              <div>Georgia</div>
              <Button className="bg-red-500 rounded-full text-white py-1 px-8 mt-2 absolute bottom-0 flex m-auto">
                Unfriend
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg flex p-5">
            <div className="w-[150px] h-[150px] bg-gray-300"></div>
            <div className="px-6 relative">
              <div className="text-2xl">Gabby Roxas</div>
              <div className="py-1">NAICS CODE: 11111000</div>
              <div>Georgia</div>
              <Button className="bg-red-500 rounded-full text-white py-1 px-8 mt-2 absolute bottom-0 flex m-auto">
                Unfriend
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
