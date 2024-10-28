"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import SBAContractingGuide from "./components/SBAContractingGuide";
import ContractingAssistanceProgram from "./components/ContractingAssistanceProgram";
import SBACounselingandHelp from "./components/SBACounselingandHelp";
import FPDSgov from "./components/FPDSgov";
import SAMgov from "./components/SAMgov";
import NavigatingtheupdatedHUBZoneMap from "./components/NavigatingtheupdatedHUBZoneMap";
import SizeStandards from "./components/SizeStandards";
import SCOREBusinessMentoring from "./components/SCOREBusinessMentoring";
import UpdateProfile from "./components/UpdateProfile";

type ResourceType = {
  name: string;
  component: JSX.Element;
};

const Resource = () => {
  const [selectedResource, setSelectedResource] = useState<JSX.Element | null>(<SBAContractingGuide />);

  const components: ResourceType[] = [
    { name: "SBA Contracting Guide", component: <SBAContractingGuide /> },
    { name: "Contracting Assistance Program", component: <ContractingAssistanceProgram /> },
    { name: "SBA Counseling and Help", component: <SBACounselingandHelp /> },
    { name: "FPDS.gov", component: <FPDSgov /> },
    { name: "SAM.gov", component: <SAMgov /> },
    { name: "Navigating the updated HUBZone Map", component: <NavigatingtheupdatedHUBZoneMap /> },
    { name: "Size Standards", component: <SizeStandards /> },
    { name: "SCORE Business Mentoring", component: <SCOREBusinessMentoring /> },
    { name: "Where to update your profile", component: <UpdateProfile /> },
  ];

  const handleResourceClick = (resource: JSX.Element) => {
    setSelectedResource(resource);
  };

  // Handle dropdown selection
  const handleSelectChange = (value: string) => {
    const selectedComponent = components.find(item => item.name === value)?.component;
    if (selectedComponent) {
      setSelectedResource(selectedComponent);
    }
  };

  return (
    <div className="bg-white lg:bg-transparent px-5 lg:px-14">
      <div className="py-4 lg:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        <h1 className="text-center lg:text-left sm:col-span-4 text-xs lg:text-[55px] font-semibold text-secondary">
          RESOURCES
        </h1>

        <div className="sm:col-span-8 flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex gap-2 items-center w-full lg:w-[70%]">
            <span className="text-xs lg:text-2xl text-center">Category</span>
            <Select>
              <SelectTrigger className="rounded-full text-sm w-full h-6 lg:h-10 shadow-md lg:shadow-lg mr-2">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <span className="text-xs lg:text-2xl">Subcategory</span>
            <Select>
              <SelectTrigger className="rounded-full text-sm w-full h-6 lg:h-10 shadow-lg">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center w-full lg:w-[30%]">
            <div className="relative flex w-full">
              <Input
                className="rounded-full text-[10px] lg:text-lg w-full sm:w-3/4 md:w-full h-7 lg:h-10 shadow-lg sm:pl-4 border-none lg:border"
                placeholder="Search here"
              />
              <div className="absolute right-0 top-0 bg-primary rounded-r-full w-10 h-7 lg:h-10 flex items-center justify-center">
                <HiMagnifyingGlass className="text-black w-4 h-4 lg:w-6 lg:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-6 lg:pb-20 ">
        <div className="lg:hidden ">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="border-none lg:border w-1/2 rounded-full text-xs lg:text-sm lg:w-full h-7 lg:h-10 lg:shadow-lg">
            <SelectValue placeholder={components[0]?.name} />
            </SelectTrigger>
            <SelectContent>
              {components.map((item) => (
                <SelectItem key={item.name} value={item.name} >
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <hr className="mt-3 lg:hidden border-t-1 border-gray-300" />
        <div className="sm:col-span-4 hidden sm:block">
          <div className="bg-white rounded-3xl divide-y p-2 text-2xl">
            {components.map((item) => (
              <div
                key={item.name}
                className="p-6 cursor-pointer"
                onClick={() => handleResourceClick(item.component)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="sm:col-span-8">
          {selectedResource}
        </div>
      </div>
      </div>
  );
};

export default Resource;
