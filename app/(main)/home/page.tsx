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
import Categories from "./categories";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-20 overflow-x-hidden">
        <div className="container md:py-7 px-4 md:px-0">
          <Recommended/>
        </div>
      <div>
        <div>
          <Popular/>
          <Categories/>
        </div>
        <FAQ />

        {/* APP BANNER */}
        <div className="bg-gradient-to-r from-[#99c5ea] to-[#f0ab91] py-14 md:py-40">
          <div className="container px-4 md:px-0 flex">
            <div className="my-auto">
              <h2 className="font-bold text-lg md:text-[64px] md:pb-9 md:leading-[3.5rem] text-center text-secondary">
                Federal Forecasting App
              </h2>
              <div className="text-[10px] md:text-3xl font-semibold text-gray-700 text-center tracking-wide">
                <p className="pb-2 text-nowrap">
                  A Platform Where You Will Get All Information
                </p>
                <p>Related To The Federal Government Forecasts</p>
              </div>
              <div className="flex space-x-2 pt-6 md:pt-11 items-center justify-center">
                <a href="#" className="px-3 py-1 md:pt-3 md:pb-2 md:px-10 bg-black rounded-full">
                  <div className="flex items-center gap-1 md:gap-2 text-white">
                    <Image
                      src="/google-play.svg"
                      alt="Google play"
                      width={32}
                      height={32}
                      className="w-[10px] h-[10px] md:w-[32px] md:h-[32px]"
                    />
                    <div className="text-left tracking-wide flex flex-col">
                      <small className="text-[6px] md:text-[9px]">GET ON</small>
                      <small className="text-[8px] md:text-sm text-nowrap">Google Play</small>
                    </div>
                  </div>
                </a>
                <a href="#" className="bg-black rounded-full px-3 py-1 md:pt-3 md:pb-2 md:px-10">
                  <div className="flex items-center gap-1 md:gap-2 text-white">
                    <FaApple className="w-[12px] h-[12px] md:w-[32px] md:h-[32px]" />
                    <div className="text-left tracking-wide  flex flex-col">
                      <small className="text-[6px] md:text-[9px]">Available on the</small>
                      <small className="text-[8px] md:text-sm text-nowrap">App Store</small>
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
              className="ml-auto w-[140px] h-[122px] md:w-[625px] md:h-[600px]"
            />
          </div>
        </div>

        {/* OPPORTUNITIES BANNER */}
        <div className="relative bg-[url('/images/bg-home-white.png')] bg-no-repeat bg-right-top md:bg-bottom py-4 md:py-7">
          <div className="container px-4 md:px-0 flex items-center">
            <div className="w-[65%] md:w-[580px] md:pt-24 md:pb-28">
              <div className="text-base md:text-[64px] md:leading-[80px] font-bold text-secondary">
                Discover Federal Contracting{" "}
                <span className="text-primary">Opportunities</span>
              </div>
              <div className="text-[9px] px-2 md:px-0 md:text-xl text-gray-500 md:leading-8">
                <p className="py-3 md:py-5">
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
              <div className="w-full flex justify-center md:justify-start">
                  <Button className="rounded-full text-[10px] md:text-xl h-[33px] w-[157px] md:w-[287px] md:h-[66px] mt-4 md:mt-8">
                  Get the Book Now!
                  <HiArrowDownTray className="ml-3 bg-white rounded-full text-black p-1 md:p-2 w-5 md:w-9 h-auto" />
                </Button>
              </div>

            </div>
            <Image
              src="/images/wealth-book.png"
              width={630}
              height={600}
              alt="Book"
              className="mx-auto w-[107px] h-[137px] md:w-[630px] md:h-[700px]"
            />
          </div>
          <Image
            src='/images/blob-top-left.png'
            width={625}
            height={600}
            alt="Background shape"
            className="absolute -top-10 md:-top-40 -right-5 md:right-20 -z-10 w-[156px] h-[166px] md:w-[625px] md:h-[600px]"
          />
        </div>
      </div>

      {/* <Videos/> */}
    </div>
  );
}
