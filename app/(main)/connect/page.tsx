"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
  HiOutlineCalendarDays,
  HiUserCircle,
  HiOutlinePaperAirplane,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { Calendar } from "@/components/ui/calendar";

const Connect = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-cols-12 gap-4 p-9">
      <div className=" col-span-3 bg-white rounded-3xl relative">
        <div className="flex !items-center p-4 py-8">
          <div className="font-medium text-3xl">CHAT</div>

          <div className="relative mx-4">
            <Input
              id="search-chat"
              name="search-chat"
              className="block rounded-full h-14 appearance-none"
            />
            <HiOutlineMagnifyingGlass className="absolute text-gray-400 h-auto w-9 my-auto right-4 top-0 bottom-0" />
          </div>
        </div>
        <div className="">
          <div className="flex items-center text-2xl font-medium py-3 bg-gray-200 p-4">
            <div className="w-[60px] h-[60px] bg-gray-400 rounded-full relative">
              <div className="w-5 h-5 bg-green-600 rounded-full absolute -right-2 -top-1"></div>
            </div>
            <div className="pl-4">FFA - GROUP</div>
            <div className="text-xl ml-auto text-gray-400">1 min ago</div>
          </div>
          <div className="flex items-center text-2xl font-medium py-3 p-4">
            <div className="w-[60px] h-[60px] bg-gray-400 rounded-full relative">
              <div className="w-5 h-5 bg-gray-500 rounded-full absolute -right-2 -top-1"></div>
            </div>
            <div className="pl-4">S. Orinthia Duncan</div>
            <div className="text-xl ml-auto text-gray-400">2 min ago</div>
          </div>
          <div className="flex items-center text-2xl font-medium py-3  p-4">
            <div className="w-[60px] h-[60px] bg-gray-400 rounded-full relative">
              <div className="w-5 h-5 bg-green-600 rounded-full absolute -right-2 -top-1"></div>
            </div>
            <div className="pl-4">Gabby Roxas</div>
            <div className="text-xl ml-auto text-gray-400">2 min ago</div>
          </div>
        </div>
        <div className="absolute right-2 bottom-4">
          <HiOutlinePencilSquare className="w-14 h-auto cursor-pointer" />
        </div>
      </div>
      <div className="w-full col-span-6 space-y-5 bg-white rounded-3xl h-screen relative">
        <div className="flex !items-center px-5 py-4 border-b border-gray-300">
          <div className="w-[70px] h-[70px] bg-gray-400 rounded-full relative"></div>
          <div className="font-medium text-3xl pl-8">FFA - GROUP</div>
        </div>
        <div className=" bottom-0 absolute border-t border-gray-300 p-4 w-full">
          <div className="flex items-center">
            <HiUserCircle className="w-14 h-14 fill-white bg-secondary rounded-full mr-5 overflow-visible" />

            <Input
              id="message"
              name="message"
              placeholder="Add a chat"
              className=" rounded-full font-medium pl-6 text-2xl h-16 appearance-none bg-gray-200"
            />
            <HiOutlinePaperAirplane className="w-14 h-14 -rotate-45 bg-primary rounded-full overflow-visible text-white p-2.5 ml-5" />
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-white rounded-3xl pb-10">
        <div className="flex !items-center px-5 py-8 border-b border-gray-300">
          <div className="font-medium text-3xl">MEETINGS</div>

          <HiOutlinePlus className="bg-primary text-white ml-auto w-12 h-12 rounded-full p-1" />
        </div>
        <div className="flex w-full border-b border-gray-300 h-96">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="h-full w-full flex"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1 text-2xl",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
              caption_label: "text-xl",
            }}
          />
        </div>

        <div className="font-medium text-3xl px-5 py-8">UPCOMMING</div>
        <div className="text-2xl p-4 bg-gray-100">
          <div className="flex items-center">
            <div>Title</div>
            <div className="ml-auto text-gray-500">09/12/24</div>
          </div>
          <p className="text-gray-500">Description</p>
          <div className="flex items-center pt-3 text-gray-500">
            <HiOutlineCalendarDays className="w-8 h-8" />
            01:00 - 3:00 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
