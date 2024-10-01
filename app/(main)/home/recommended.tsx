import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaChevronRight } from "react-icons/fa";

const Recommended = () => {

  return (
    <div>
    <Carousel>
      <CarouselContent>
        {Array(5).fill(null).map((_, key) => (
          <CarouselItem key={key}>
            <Card className="border-secondary">
              <CardHeader className="border-b-4 border-[#00ba00]">
                <CardTitle className="text-xl px-16 font-normal flex flex-row items-center w-full text-center ">
                  <div className="basis-1/4">Posted 7/31/24, 7:55 AM</div>
                  <FaChevronRight className="text-primary" />
                  <div className="basis-1/4 ">No Updates</div>
                  <FaChevronRight className="text-primary" />
                  <div className="basis-1/4 ">Due 8/23/24, 5:00 AM</div>
                  <FaChevronRight className="text-primary" />
                  <div className="basis-1/4">No Award Date</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className=" divide-y divide-gray-300">
                  <div className="p-9 pr-16">
                    <div className="text-secondary text-2xl font-semibold leading-9">
                      Lorem ipsum dolor sit amet
                    </div>
                    <div className="text-xl">
                      Lorem ipsum # Dolor sit amet Type Solicitation
                    </div>
                    <p className="text-sm pt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
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
  );
};

export default Recommended;
