import * as React from "react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
    HiOutlineMagnifyingGlass,
    HiUserCircle,
    HiOutlineBell,
    HiOutlineBars3,
} from "react-icons/hi2";

export default function Navbar() {
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
                        <HiUserCircle className="mx-4 w-12 h-auto text-secondary" />
                        <div className=" text-xl hidden lg:block whitespace-nowrap">
                            Derrick
                        </div>
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
                    <div className="text-xl border-b-4 border-secondary hover:border-primary hover:border-b-4 py-7 cursor-pointer">
                        Home
                    </div>
                    <div className="text-xl border-b-4 border-secondary hover:border-primary hover:border-b-4 py-7 cursor-pointer">
                        Learn
                    </div>
                    <div className="text-xl border-b-4 border-secondary hover:border-primary hover:border-b-4 py-7 cursor-pointer">
                        Build
                    </div>
                    <div className="text-xl border-b-4 border-secondary hover:border-primary hover:border-b-4 py-7 cursor-pointer">
                        Grow
                    </div>
                    <div className="text-xl border-b-4 border-secondary hover:border-primary hover:border-b-4 py-7 cursor-pointer">
                        Find
                    </div>
                    <div className="text-xl border-b-4 border-secondary hover:border-primary hover:border-b-4 py-7 cursor-pointer">
                        Connect
                    </div>
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
