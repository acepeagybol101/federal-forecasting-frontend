"use client";
import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaChevronRight } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Recommended = () => {
  const { data: session, status } = useSession();
  return (
    <div>
    <h2 className="text-base md:text-5xl text-secondary text-center font-bold py-8 pb md:py-16">
      Hi {session?.user?.name?.split(' ')[0] || 'Guest'}, here&apos;s what&apos;s recommended for you!
    </h2>
      <Carousel>
        <CarouselContent>
          {Array(5).fill(null).map((_, key) => (
            <CarouselItem key={key}>
              <Card className="border-secondary">
                <CardHeader className="border-b-4 border-[#00ba00] p-2 md:p-6">
                  <div className="flex gap-1 md:gap-2 justify-between md:justify-around items-center">
                    <span className="text-[8px] md:text-xl">Posted 7/31/24, 7:55 AM</span>
                    <FaChevronRight className="text-primary" />
                    <span className="text-[8px] md:text-xl">No Updates</span>
                    <FaChevronRight className="text-primary" />
                    <span className="text-[8px] md:text-xl">Posted 8/23/24, 5:00 AM</span>
                    <FaChevronRight className="text-primary" />
                    <span className="text-[8px] md:text-xl">No Updates</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className=" divide-y divide-gray-300">
                    <div className="px-3 md:px-10 py-2 md:py-6">
                      <CardTitle className="text-secondary text-base md:text-2xl font-semibold leading-9">
                        Lorem ipsum dolor sit amet
                      </CardTitle>
                      <div className="flex gap-2 md:gap-6">
                        <p className="text-xs md:text-xl">Lorem ipsum # <span className="font-semibold">DOLOR SIT AMET</span></p>
                        <p className="text-xs md:text-xl">Type <span className="font-semibold">SOLICITATION</span></p>
                      </div>
                      <p className="text-xs md:text-sm pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <CarouselDots/>
      </Carousel>
  </div>
  );
};

export default Recommended;
