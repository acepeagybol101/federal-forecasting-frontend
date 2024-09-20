import React from "react";
import {
  HiChevronRight,
  HiMagnifyingGlass,
  HiOutlineAdjustmentsVertical,
} from "react-icons/hi2";
import { Input } from "@/components/ui/input";

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
      <div className="bg-[url('/images/bg-find.png')] h-[706px] bg-opacity-20">
        <div className="flex items-center h-full">
          <div className="m-auto">
            <div className="text-[55px] font-semibold italic text-white text-center pb-5">
              FIND OPPORTUNITIES
            </div>

            <div className="relative">
              <Input
                className="w-[834px] h-[85px] rounded-full text-2xl pl-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search here"
              />
              <div className="absolute flex right-0 top-0 bottom-0 m-auto">
                <HiOutlineAdjustmentsVertical className="m-auto h-10 w-10 mr-3" />
                <div className=" bg-primary rounded-r-full w-28 flex">
                  <HiMagnifyingGlass className="m-auto h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg m-[75px] overflow-hidden">
        <div className="font-semibold italic text-[40px] p-6 rounded-2xl border-b border-gray-300 text-center">
          DRAFT: Design-Build Services for the Ft Harrison, MT VAMC Seismic
          Upgrade and Specialty Care Improvements; Phase I, Design-Build Central
          Utility Plant
        </div>
        <div className="px-[90px]">
          <div className="text-2xl font-semibold italic text-center  py-9">
            [AM 0001: Internal review requirements have delayed formal
            solicitation, check back frequently to this SAM announcement for
            updates.][[AM0002: Updated the Response Time for this DRAFT, through
            the forecasted Official Solicitation Issuance. Future amendment(s)
            may be issued in order to maintain a current forecasted
          </div>

          <div className="grid grid-cols-2 gap-16 pb-10 px-12">
            {dummyData.map((data) => (
              <div
                key={data.title}
                className="rounded-3xl shadow-2xl min-h-48 p-5"
              >
                <div className="text-secondary font-bold text-4xl pb-3">
                  {data.title}
                </div>
                <p className="font-bold text-2xl pl-5">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#03537d] flex items-center text-white text-[40px] py-1 pl-9">
          <div>Posted: 09/17/24</div>
          <HiChevronRight className="mx-5" />
          <div>Due Date: 10/01/24 </div>
          <HiChevronRight className="mx-5" />
          <div>No Award Date</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg m-[75px] overflow-hidden">
        <div className="font-semibold italic text-[40px] p-6 rounded-2xl border-b border-gray-300 text-center">
          DRAFT: Design-Build Services for the Ft Harrison, MT VAMC Seismic
          Upgrade and Specialty Care Improvements; Phase I, Design-Build Central
          Utility Plant
        </div>
        <div className="px-[90px]">
          <div className="text-2xl font-semibold italic text-center  py-9">
            [AM 0001: Internal review requirements have delayed formal
            solicitation, check back frequently to this SAM announcement for
            updates.][[AM0002: Updated the Response Time for this DRAFT, through
            the forecasted Official Solicitation Issuance. Future amendment(s)
            may be issued in order to maintain a current forecasted
          </div>

          <div className="grid grid-cols-2 gap-16 pb-10 px-12">
            {dummyData.map((data) => (
              <div
                key={data.title}
                className="rounded-3xl shadow-2xl min-h-48 p-5"
              >
                <div className="text-secondary font-bold text-4xl pb-3">
                  {data.title}
                </div>
                <p className="font-bold text-2xl pl-5">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#03537d] flex items-center text-white text-[40px] py-1 pl-9">
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
