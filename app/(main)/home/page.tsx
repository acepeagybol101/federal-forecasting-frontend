import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories, steps } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { HiArrowDownTray } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

export default function Home() {
    const popular = [1, 2, 3].map((popular, index) => (
        <Card key={index} className="border-secondary">
            <CardHeader className="border-b-4 border-[#00ba00]">
                <CardTitle className="text-xl font-semibold">
                    Federal Contract Opportunites
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className=" divide-y divide-gray-300">
                    <div className="px-6 py-4">
                        <div className="text-secondary text-lg">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            porro quisquam...
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-secondary text-lg">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            porro quisquam...
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    ));

    return (
        <div>
            <div className="md:px-8 xl:px-20 2xl:px-40 py-7">
                <div className="py-16 text-5xl text-secondary text-center font-bold">
                    Hi Ino, here&apos;s what&apos;s recommended for you!
                </div>
                <div>
                    <Carousel>
                        <CarouselContent>
                            {[1, 2, 3, 4, 5, 6].map((item, key) => (
                                <CarouselItem key={key}>
                                    <Card className="border-secondary">
                                        <CardHeader className="border-b-4 border-[#00ba00]">
                                            <CardTitle className="text-xl px-16 font-normal flex flex-row items-center w-full text-center ">
                                                <div className="basis-1/4">
                                                    Posted 7/31/24, 7:55 AM
                                                </div>
                                                <FaChevronRight className="text-primary" />
                                                <div className="basis-1/4 ">
                                                    No Updates
                                                </div>
                                                <FaChevronRight className="text-primary" />
                                                <div className="basis-1/4 ">
                                                    Due 8/23/24, 5:00 AM
                                                </div>
                                                <FaChevronRight className="text-primary" />
                                                <div className="basis-1/4">
                                                    No Award Date
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <div className=" divide-y divide-gray-300">
                                                <div className="p-9 pr-16">
                                                    <div className="text-secondary text-2xl font-semibold leading-9">
                                                        Lorem ipsum dolor sit
                                                        amet
                                                    </div>
                                                    <div className="text-xl">
                                                        Lorem ipsum # Dolor sit
                                                        amet Type Solicitation
                                                    </div>
                                                    <p className="text-sm pt-4">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris nisi ut aliquip
                                                        ex ea commodo consequat.
                                                        Duis aute irure dolor in
                                                        reprehenderit in
                                                        voluptate velit esse
                                                        cillum dolore eu fugiat
                                                        nulla pariatur.
                                                        Excepteur sint occaecat
                                                        cupidatat non proident,
                                                        sunt in culpa qui
                                                        officia deserunt mollit
                                                        anim id est laborum. Sed
                                                        ut perspiciatis unde
                                                        omnis iste natus error
                                                        sit voluptatem
                                                        accusantium doloremque
                                                        laudantium, totam rem
                                                        aperiam, eaque ipsa quae
                                                        ab illo inventore
                                                        veritatis et quasi
                                                        architecto beatae vitae
                                                        dicta sunt explicabo.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="pb-20">
                    <div className="py-16 text-5xl text-secondary text-center font-bold">
                        Popular on Federal Forecasting App
                    </div>
                    <div className="grid grid-cols-3 gap-4">{popular}</div>
                </div>
            </div>
            <div className="pb-20 md:px-8 xl:px-20 2xl:px-40">
                <div className="py-16 text-5xl text-secondary text-center font-bold">
                    Select Categories
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {categories.map((category, key) => (
                        <Card
                            key={key}
                            className="border-secondary bg-white px-14 pt-24 pb-16"
                        >
                            <CardContent className="text-gray-600">
                                <div className="flex justify-center m-auto relative w-28 py-8 border-2 border-[#00ba00] rounded-full">
                                    <Image
                                        src={category.icon}
                                        width={42}
                                        height={42}
                                        alt="Logo"
                                        className="m-auto"
                                    />
                                </div>
                                <div className="font-semibold text-3xl leading-9 text-center py-9">
                                    {category.title}
                                </div>
                                <div className="text-xl text-center leading-8">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt.
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="bg-[url('/images/bg-home-blue.png')] bg-no-repeat bg-cover md:px-8 xl:px-20 2xl:px-40 py-7">
                <div className="py-16 text-5xl text-white text-center font-bold">
                    Get started in Four Easy Steps
                </div>

                <div className="grid grid-cols-4 gap-4 pb-24">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="border-[#00ba00] rounded-none bg-transparent"
                        >
                            <CardContent className=" px-16 py-12 text-white">
                                <div className="bg-primary flex text-3xl font-semibold w-16 h-16 rounded-full">
                                    <div className="m-auto">{step.key}</div>
                                </div>
                                <div className="font-bold text-2xl py-8 leading-9">
                                    {step.title}
                                </div>
                                <p className="text-xl leading-9">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="relative bg-[url('/images/bg-home-white.png')]  bg-no-repeat bg-bottom md:px-8 xl:px-20 2xl:px-40 py-7">
                <div className="w-[580px] pt-24 pb-28">
                    <div className="text-6xl leading-[80px] font-bold text-secondary">
                        Discover Federal Contracting{" "}
                        <span className="text-primary">Opportunities</span>
                    </div>
                    <div className="text-xl text-gray-500 leading-8">
                        <p className="py-5">
                            Welcome to a world of hidden opportunities! Did you
                            know that there&apos;s wealth hidden in plain sight
                            for Small Disadvantaged Businesses.
                        </p>
                        <p>
                            If you&apos;re ready to explore the realm of federal
                            contracting or if you&apos;ve already started but
                            seek to streamline your processes, you&apos;re in
                            the right place.
                        </p>
                    </div>
                    <Button className="rounded-full text-xl py-8 px-6 mt-8">
                        Get the Book Now!
                        <HiArrowDownTray className="ml-3 bg-white rounded-full text-black p-2 w-9 h-auto" />
                    </Button>
                </div>
            </div>

            <div className="flex bg-gradient-to-r from-[#99c5ea] to-[#f0ab91] py-40 md:px-8 xl:px-20 2xl:px-40">
                <div className="my-auto">
                    <div className="font-bold text-7xl pb-9 text-secondary">
                        Federal Forecasting App
                    </div>
                    <div className="text-3xl  font-semibold text-gray-700 text-center tracking-wide">
                        <div className="pb-2">
                            A Platform Where You Will Get All Information
                        </div>
                        <div>Related To The Federal Government Forecasts</div>
                    </div>
                    <div className="flex space-x-2 pt-11 items-center justify-center">
                        <a
                            href="#"
                            className=" pt-3 pb-2 px-10 bg-black rounded-full"
                        >
                            <div className=" inline-flex items-center text-white">
                                <Image
                                    src="/google-play.svg"
                                    alt="Google play"
                                    width={32}
                                    height={32}
                                />
                                <div className="pl-3 text-left tracking-wide">
                                    <div className="text-[9px]">GET ON</div>
                                    <div className="text-sm">Google Play</div>
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className=" bg-black rounded-full pt-3 pb-2 px-10"
                        >
                            <div className=" inline-flex items-center text-white">
                                <FaApple className="w-8 h-auto" />
                                <div className="pl-2 text-left tracking-wide">
                                    <div className="text-[9px]">
                                        Available on the
                                    </div>
                                    <div className="text-sm">App Store</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <Image
                    src="/images/home-banner-phone.png"
                    width={625}
                    height={600}
                    alt="Logo"
                    className="ml-auto"
                />
            </div>

            <div className="bg-[url('/images/bg-home-video.png')] bg-cover bg-no-repeat pt-36 md:px-8 xl:px-20 2xl:px-40">
                <div className="py-16 text-5xl text-secondary text-center font-bold">
                    Videos
                </div>

                <div className="grid grid-cols-4 gap-4 pt-14 pb-36">
                    <div>
                        <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
                        <div className="font-medium text-secondary pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </div>
                    </div>
                    <div>
                        <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
                        <div className="font-medium text-secondary pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </div>
                    </div>
                    <div>
                        <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
                        <div className="font-medium text-secondary pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </div>
                    </div>
                    <div>
                        <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
                        <div className="font-medium text-secondary pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
