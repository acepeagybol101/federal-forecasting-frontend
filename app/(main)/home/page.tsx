import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories, steps } from "@/constants/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaApple } from "react-icons/fa6";
import FAQ from "./faq";
import Videos from "./videos";
import Recommended from "./recommended";
import Popular from "./popular";

export default function Home() {

  return (
    <div>
      <div className="px-4 md:px-8 xl:px-20 2xl:px-40 py-7">
        <div className="py-16 text-5xl text-secondary text-center font-bold">
          Hi Ino, here&apos;s what&apos;s recommended for you!
        </div>
        <Recommended/>
        <Popular/>
      </div>
      <div className="pb-20 px-4 md:px-8 xl:px-20 2xl:px-40">
        <div className="py-16 text-5xl text-secondary text-center font-bold">
          Select Categories
        </div>
        <div className="grid md:grid-cols-3 gap-4">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-[url('/images/bg-faq.png')] md:px-8 xl:px-20 2xl:px-40 py-7">
        <FAQ />
      </div>

      {/* <div className="bg-[url('/images/bg-home-blue.png')] bg-no-repeat bg-cover md:px-8 xl:px-20 2xl:px-40 py-7">
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
            </div> */}

      <div className="flex bg-gradient-to-r from-[#99c5ea] to-[#f0ab91] py-40 md:px-8 xl:px-20 2xl:px-40">
        <div className="my-auto">
          <div className="font-bold text-[64px] pb-9 text-secondary">
            Federal Forecasting App
          </div>
          <div className="text-3xl  font-semibold text-gray-700 text-center tracking-wide">
            <div className="pb-2">
              A Platform Where You Will Get All Information
            </div>
            <div>Related To The Federal Government Forecasts</div>
          </div>
          <div className="flex space-x-2 pt-11 items-center justify-center">
            <a href="#" className=" pt-3 pb-2 px-10 bg-black rounded-full">
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
            <a href="#" className=" bg-black rounded-full pt-3 pb-2 px-10">
              <div className=" inline-flex items-center text-white">
                <FaApple className="w-8 h-auto" />
                <div className="pl-2 text-left tracking-wide">
                  <div className="text-[9px]">Available on the</div>
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

      <div className="relative bg-[url('/images/bg-home-white.png')]  bg-no-repeat bg-bottom md:px-8 xl:px-20 2xl:px-40 py-7">
        <div className="w-[580px] pt-24 pb-28">
          <div className="text-[64px] leading-[80px] font-bold text-secondary">
            Discover Federal Contracting{" "}
            <span className="text-primary">Opportunities</span>
          </div>
          <div className="text-xl text-gray-500 leading-8">
            <p className="py-5">
              Welcome to a world of hidden opportunities! Did you know that
              there&apos;s wealth hidden in plain sight for Small Disadvantaged
              Businesses.
            </p>
            <p>
              If you&apos;re ready to explore the realm of federal contracting
              or if you&apos;ve already started but seek to streamline your
              processes, you&apos;re in the right place.
            </p>
          </div>
          <Button className="rounded-full text-xl py-8 px-6 mt-8">
            Get the Book Now!
            <HiArrowDownTray className="ml-3 bg-white rounded-full text-black p-2 w-9 h-auto" />
          </Button>
        </div>
      </div>
      <Videos/>
    </div>
  );
}
