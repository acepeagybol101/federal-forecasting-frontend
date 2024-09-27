import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { HiXMark } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-[850px] max-h-[900px] p-12 !rounded-3xl ">
        <AlertDialogHeader className="relative">
          <AlertDialogCancel className=" absolute -right-5 -top-5 p-0 border-0 hover:bg-transparent">
            <HiXMark className="  w-12 h-auto" />
          </AlertDialogCancel>
          <AlertDialogTitle className="flex items-center text-secondary text-3xl">
            FILTER OPPORTUNITIES
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-8">
            <Input
              className=" rounded-2xl text-xl bg-gray-200 h-14 p-5"
              placeholder="Title"
            />
            <div className="grid grid-cols-2 gap-8 pt-8">
              <Input
                className=" rounded-2xl text-xl bg-gray-200 h-14 p-5"
                placeholder="Solicitation"
              />
              <Input
                className=" rounded-2xl text-xl bg-gray-200 h-14 p-5"
                placeholder="Classification Code"
              />
              <Input
                className=" rounded-2xl text-xl bg-gray-200 h-14 p-5"
                placeholder="Archive Type"
              />
              <Input
                className=" rounded-2xl text-xl bg-gray-200 h-14 p-5"
                placeholder="Archive Date"
              />
              <Select>
                <SelectTrigger className=" rounded-2xl bg-gray-200 text-xl w-full p-6 shadow-lg">
                  <SelectValue placeholder="Select Naics" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className=" rounded-2xl bg-gray-200 text-xl w-full p-6 shadow-lg">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className=" rounded-2xl bg-gray-200 text-xl w-full p-6 shadow-lg">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className=" rounded-2xl bg-gray-200 text-xl w-full p-6 shadow-lg">
                  <SelectValue placeholder="Select Set Aside Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogAction className="m-auto rounded-full text-2xl px-14 bg-primary h-14">
            CONNECT
          </AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Filter;
