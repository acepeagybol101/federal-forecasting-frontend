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
      <PopoverContent className="w-96 mr-80">
        <div className="pb-5 px-3">
          <div className="text-2xl py-2 pl-5">State:</div>
          <Select>
            <SelectTrigger className=" rounded-full text-xl w-full p-6 shadow-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-2xl py-2 pl-5 mt-3">Category:</div>
          <Select>
            <SelectTrigger className=" rounded-full text-xl w-full p-6 shadow-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-2xl py-2 pl-5 mt-3">Subcategory:</div>
          <Select>
            <SelectTrigger className=" rounded-full text-xl w-full p-6 shadow-lg">
              <SelectValue placeholder="Select" />
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
