import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-[80vw] mr-10 lg:w-96 lg:mr-80">
        <div className="pb-5 px-3">
          <p className="text-sm lg:text-xl py-2 pl-5">State:</p>
          <Select>
            <SelectTrigger className="rounded-full text-xl w-full p-6 h-7 lg:h-9 shadow-lg">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm lg:text-xl py-2 pl-5 mt-3">Category:</p>
          <Select>
            <SelectTrigger className=" rounded-full text-xl w-full p-6 h-7 lg:h-9 shadow-lg">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm lg:text-xl py-2 pl-5 mt-3">Subcategory:</p>
          <Select>
            <SelectTrigger className="rounded-full text-xl w-full p-6 h-7 lg:h-9 shadow-lg">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Filter;
