import React from "react";
import {
  HiChevronRight,
  HiMagnifyingGlass,
  HiOutlineAdjustmentsVertical,
} from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import Filter from "@/components/find/filter";

const dummyData = [
  {
    title: "Naics Code",
    description: "811111 - General Automotive Repair",
  },
  {
    title: "SetAside Code",
    description: "No Set-Aside Used",
  },
  {
    title: "Department/Int.Agency",
    description:
      "INTERIOR, DEPARTMENT OF THE.US FISH AND WILDLIFE SERVICE.FWS, SAT TEAM 2",
  },
  {
    title: "Base Type",
    description: "Special Notice",
  },
];

const Find = () => {
  return (
    <div>
      <div className="bg-[url('/images/bg-find.png')] h-56 md:h-[706px] px-4 md:px-0 bg-opacity-20">
        <div className="flex items-center h-full">
          <div className="m-auto">
            <div className="text-3xl md:text-5xl font-semibold italic text-white text-center pb-5">
              FIND OPPORTUNITIES
            </div>

            <div className="relative hidden md:block">
              <Input
                className="w-[834px] py-8 rounded-full text-lg pl-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search here"
              />
              <div className="absolute flex right-0 top-0 bottom-0 m-auto">
                <Filter>
                  <HiOutlineAdjustmentsVertical className="m-auto h-10 w-10 mr-3 cursor-pointer" />
                </Filter>
                <div className=" bg-primary rounded-r-full w-28 flex">
                  <HiMagnifyingGlass className="m-auto h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg m-4 md:m-[75px] md:mx-72 overflow-hidden">
        <div className="font-semibold italic text-lg md:text-xl p-6 rounded-2xl border-b border-gray-300 text-center">
          DRAFT: Design-Build Services for the Ft Harrison, MT VAMC Seismic
          Upgrade and Specialty Care Improvements; Phase I, Design-Build Central
          Utility Plant
        </div>
        <div className="px-4 md:px-[90px]">
          <div className="md:text-lg font-semibold italic text-center  py-9">
            [AM 0001: Internal review requirements have delayed formal
            solicitation, check back frequently to this SAM announcement for
            updates.][[AM0002: Updated the Response Time for this DRAFT, through
            the forecasted Official Solicitation Issuance. Future amendment(s)
            may be issued in order to maintain a current forecasted
          </div>

          <div className="grid md:grid-cols-2 md:gap-16 pb-10 md:px-12">
            {dummyData.map((data) => (
              <div
                key={data.title}
                className="rounded-3xl shadow-2xl min-h-48 p-5"
              >
                <div className="text-secondary font-bold text-lg md:text-xl pb-3 truncate">
                  {data.title}
                </div>
                <p className="md:font-bold md:text-lg pl-5">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#03537d] flex items-center text-white md:text-xl py-3 px-4 md:px-9">
          <div>Posted: 09/17/24</div>
          <HiChevronRight className="mx-5" />
          <div>Due Date: 10/01/24 </div>
          <HiChevronRight className="mx-5" />
          <div>No Award Date</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg m-4 md:m-[75px] md:mx-72 overflow-hidden">
        <div className="font-semibold italic text-lg md:text-xl p-6 rounded-2xl border-b border-gray-300 text-center">
          DRAFT: Design-Build Services for the Ft Harrison, MT VAMC Seismic
          Upgrade and Specialty Care Improvements; Phase I, Design-Build Central
          Utility Plant
        </div>
        <div className="px-4 md:px-[90px]">
          <div className="md:text-lg font-semibold italic text-center  py-9">
            [AM 0001: Internal review requirements have delayed formal
            solicitation, check back frequently to this SAM announcement for
            updates.][[AM0002: Updated the Response Time for this DRAFT, through
            the forecasted Official Solicitation Issuance. Future amendment(s)
            may be issued in order to maintain a current forecasted
          </div>

          <div className="grid md:grid-cols-2 md:gap-16 pb-10 md:px-12">
            {dummyData.map((data) => (
              <div
                key={data.title}
                className="rounded-3xl shadow-2xl min-h-48 p-5"
              >
                <div className="text-secondary font-bold text-lg md:text-xl pb-3 truncate">
                  {data.title}
                </div>
                <p className="md:font-bold md:text-lg pl-5">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#03537d] flex items-center text-white md:text-xl py-3 px-4 md:px-9">
          <div>Posted: 09/17/24</div>
          <HiChevronRight className="mx-5" />
          <div>Due Date: 10/01/24 </div>
          <HiChevronRight className="mx-5" />
          <div>No Award Date</div>
        </div>
      </div>
    </div>
  );
};

export default Find;
