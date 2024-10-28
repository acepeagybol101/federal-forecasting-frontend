import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots
} from "@/components/ui/carousel";

const Popular = () => {

  return (
    <div className="container px-4 md:px-0">
        <h2 className="text-base md:text-5xl text-secondary text-center font-bold py-8 md:py-16">Popular on Federal Forecasting App</h2>
        <div className="hidden md:grid md:grid-cols-3 gap-4">
            {Array(3).fill(null).map((_, index) => (
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing porro
                            quisquam...
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="text-secondary text-lg">
                            Lorem ipsum dolor sit amet
                            </div>
                            <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing porro
                            quisquam...
                            </div>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="md:hidden">
            <Carousel>
                <CarouselContent>
                {Array(3).fill(null).map((_, key) => (
                    <CarouselItem key={key}>
                        <Card className="border-secondary">
                            <CardHeader className="border-b-4 border-[#00ba00] p-4 md:p-6">
                                <CardTitle className="text-xs font-semibold">
                                Federal Contract Opportunites
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className=" divide-y divide-gray-300">
                                <div className="px-6 py-4">
                                    <div className="text-secondary text-xs">
                                    Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing porro
                                    quisquam...
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="text-secondary text-xs">
                                    Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing porro
                                    quisquam...
                                    </div>
                                </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselDots/>
            </Carousel>
        </div>
    </div>
  );
};

export default Popular;
