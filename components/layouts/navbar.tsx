"use client";

import * as React from "react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  HiOutlineMagnifyingGlass,
  HiUserCircle,
  HiOutlineBell,
  HiOutlineBars3,
  HiArrowRightStartOnRectangle,
  HiOutlineEye,
  HiOutlineUser,
  HiOutlineBookmark,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { navbars } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/components/layouts/action";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (link: string) => link === pathname;

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <div className="p-2 md:px-8 xl:px-20 2xl:px-40 py-7">
        <div className="flex">
          <div className="w-auto h-auto">
            <Image
              src="/images/main.png"
              width={203}
              height={0}
              alt="Logo"
              className="w-52"
              priority
            />
          </div>

          <div className="m-auto lg:ml-14 hidden md:block ">
            <div className="relative">
              <Input
                id="search"
                name="search"
                placeholder="Search"
                className="block rounded-full appearance-none lg:w-[445px] md:w-[380px]"
              />
              <HiOutlineMagnifyingGlass className="absolute text-gray-800 h-auto w-6 my-auto right-4 top-0 bottom-0" />
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <HiOutlineBell className="w-12 h-auto" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <HiUserCircle className="mx-4 w-12 h-auto text-secondary" />
                <div className=" text-xl hidden lg:block whitespace-nowrap">
                  Derrick
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer">
                  <HiOutlineEye className="h-auto w-6 mr-2" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-300" />
                <DropdownMenuItem className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer">
                  <HiOutlineEye className="h-auto w-6 mr-2" />
                  My Plans
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-300" />
                <DropdownMenuItem className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer">
                  <HiOutlineUser className="h-auto w-6 mr-2" />
                  My Account
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-300" />
                <DropdownMenuItem className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer">
                  <HiOutlineDocumentText className="h-auto w-6 mr-2" />
                  Support Tickets
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-300" />
                <DropdownMenuItem className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer">
                  <HiOutlineBookmark className="h-auto w-6 mr-2" />
                  Favourites
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-300" />
                <DropdownMenuItem
                  onClick={() => handleLogout()}
                  className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer"
                >
                  <HiArrowRightStartOnRectangle className="h-auto w-6 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="relative md:hidden mx-4 mt-3">
          <Input
            id="search-mobile"
            name="search-mobile"
            placeholder="Search"
            className="block rounded-full appearance-none lg:w-[445px] md:w-[380px]"
          />
          <HiOutlineMagnifyingGlass className="absolute text-gray-800 h-auto w-6 my-auto right-4 top-0 bottom-0" />
        </div>
      </div>
      <div className="bg-secondary text-white">
        <div className=" md:px-8 xl:px-20 2xl:px-40 space-x-32 hidden lg:flex">
          {navbars.map((link) => (
            <Link key={link.name} href={link.link}>
              <div
                className={
                  "text-xl border-b-4  hover:border-primary hover:border-b-4 py-7 cursor-pointer " +
                  (isActive(link.link) ? "border-primary" : "border-secondary")
                }
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:hidden p-2 md:px-8 xl:px-20 2xl:px-40">
          <div className="py-7 flex">
            <HiOutlineBars3 className="ml-auto w-8 h-auto " />
          </div>
        </div>
      </div>
    </nav>
  );
}
