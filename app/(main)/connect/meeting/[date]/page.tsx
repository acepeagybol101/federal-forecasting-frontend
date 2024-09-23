import React from "react";

import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from "@/components/datepicker";
import { Button } from "@/components/ui/button";

const MeetingByDate = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 p-9">
        <div className="w-full col-span-9 space-y-5  rounded-3xl max-h-screen relative">
          <div className="grid grid-cols-3 gap-9">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-6 shadow-md shadow-gray-400"
              >
                <div className="font-medium text-3xl">Title</div>
                <div className="text-gray-500 text-2xl">Decription</div>

                <div className="flex items-center pt-3 text-2xl text-gray-500">
                  <HiOutlineCalendarDays className="w-8 h-8" />
                  01:00 - 3:00 PM
                </div>
                <div className=" float-right font-medium text-2xl text-gray-500">
                  View
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 bg-white rounded-3xl">
          <div className="text-4xl text-secondary border-b  border-gray-400 p-7">
            CREATE MEETING
          </div>
          <form action="" className="p-5 pt-9">
            <Input
              id="title"
              name="title"
              placeholder="Title"
              className="w-full bg-gray-200 rounded-full text-2xl h-14 p-5 placeholder:font-medium"
            />
            <Textarea
              placeholder="Description"
              rows={5}
              className="bg-gray-200 rounded-3xl mt-9 text-2xl placeholder:font-medium p-5"
            />
            <Input
              type="date"
              id="title"
              name="title"
              placeholder="Title"
              className="w-full bg-gray-200 rounded-full text-2xl h-14 p-5 placeholder:font-medium mt-9"
            />
            {/* <DatePicker className="rounded-full"/> */}
            <div className="text-[28px] font-medium py-9">ADD USERS</div>
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gray-300"></div>
              <Checkbox className="w-9 h-9 ml-auto  border-black data-[state=checked]:bg-black" />
            </div>
            <div className="flex mt-9">
              <Button className="text-[28px] font-medium rounded-full py-8 px-16  m-auto">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MeetingByDate;
