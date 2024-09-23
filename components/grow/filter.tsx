import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="font-medium w-[611px] absolute !-right-6 pb-8 pt-5 px-7 shadow-lg rounded-none -top-1">
        <DropdownMenuItem className="block">
          <div className="text-3xl py-2 pl-5">State:</div>
          <Select>
            <SelectTrigger className=" rounded-full text-3xl w-full p-7 shadow-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
        <DropdownMenuItem className="block">
          <div className="text-3xl py-2 pl-5">Category:</div>
          <Select>
            <SelectTrigger className=" rounded-full text-3xl w-full p-7 shadow-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
        <DropdownMenuItem className="block">
          <div className="text-3xl py-2 pl-5">Subcategory:</div>
          <Select>
            <SelectTrigger className=" rounded-full text-3xl w-full p-7 shadow-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
