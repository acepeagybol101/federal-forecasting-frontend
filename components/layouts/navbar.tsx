"use client";

import * as React from "react";
import { signOut } from "next-auth/react"; 
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
import { type Menu, MenuList } from "@/components/@config/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/loading"; 
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const isActive = (link: string) => link === pathname;
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ callbackUrl: '/login', redirect:true });
  };



  return (
    <nav>
      <div className="p-2 container py-7 hidden lg:block">
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

          <div className="m-auto lg:ml-14 hidden md:block">
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
                {session?.user?.name}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center py-2 tracking-wide font-medium text-lg px-5 cursor-pointer">
                  <HiOutlineEye className="h-auto w-6 mr-2" />
                  <Link href='/build/my-profile'>
                  View Profile
                  </Link>
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
          {MenuList.map((menu: Menu, key: number) => (
            <div key={key}>
              {menu.name === "Learn" ? (
                
                <DropdownMenu>
                  <DropdownMenuTrigger>
               
                    <div
                      className={
                        "text-xl border-b-4 hover:border-primary hover:border-b-4 py-7 cursor-pointer " +
                        (isActive(menu.link) ? "border-primary" : "border-secondary")
                      }
                    >
                    <Link href="/learn">
                      {menu.name}
                      </Link>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer py-2">
                      <Link href="/learn">Launch Pad</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-2">
                      <Link href="/learn/training-vid">Training Videos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-2">
                      <Link href="/learn/resource">Resources</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-2">
                      <Link href="/learn/insight">News & Insights</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
               
              ) : (
                <Link href={menu.link}>
                  <div
                    className={
                      "text-xl border-b-4 hover:border-primary hover:border-b-4 py-7 cursor-pointer " +
                      (isActive(menu.link) ? "border-primary" : "border-secondary")
                    }
                  >
                    {menu.name}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="lg:hidden px-6 py-2 flex">
            <div className="w-auto h-auto">
              <Image
                src="/images/federal-logo-white.png"
                width={95}
                height={50}
                alt="Logo"
                className="w-[95px] h-[50px]"
                priority
              />
            </div>
            <HiOutlineBars3 className="ml-auto w-8 h-auto " />
        </div>
      </div>
      {loading && <Loading />} 
    </nav>
  );
}


