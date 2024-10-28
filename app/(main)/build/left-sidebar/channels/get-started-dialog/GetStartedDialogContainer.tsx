"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTitleDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
    {
        svgSrc: '/container.svg',
        imageSrc: '/images/update-profile.png',
        title: 'Update Profile',
        description: [
            '• Log in and complete your profile with business details, industry focus, and preferences.',
            '• This ensures you receive customized contract opportunities and relevant insights tailored to your business.',
        ],
    },
    {
        svgSrc: '/container.svg',
        imageSrc: '/images/building.png',
        title: 'Learn',
        description: [
            '• Access essential resources and expert insights tailored to help you succeed in federal contracting.',
            '• Explore webinars, articles, and tutorials designed to guide you through the complexities of government procurement.',
        ],
    },
    {
        svgSrc: '/container.svg',
        imageSrc: '/images/people.png',
        title: 'Build',
        description: [
            '• Connect and collaborate with industry peers to strengthen your federal contracting strategy.',
            '• Share insights, attend virtual networking events, and leverage community forums to boost your contracting expertise.',
        ],
    },
    {
        svgSrc: '/container.svg',
        imageSrc: '/images/chart-bar.png',
        title: 'Grow',
        description: [
            '• Expand your business using tools that support your growth and development within the federal contracting space.',
            '• Track your progress and set goals to achieve long-term success.',
        ],
    },
    {
        svgSrc: '/container.svg',
        imageSrc: '/images/protactor.png',
        title: 'Find',
        description: [
            '• Unlock opportunities with integrated tools that allow you to search, filter, and track government contracts.',
            '• Receive alerts for new opportunities that match your business needs.',
        ],
    },
    {
        svgSrc: '/container.svg',
        imageSrc: '/images/users.png',
        title: 'Connect',
        description: [
            '• Streamline communication and schedule meetings within your contracting community.',
            '• Use built-in messaging and meeting tools to stay connected with partners, suppliers, and government agencies.',
        ],
    },
];

const GetStartedDialogContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);

    return (
        <div>
            <div className="text-xl lg:pb-8">
                <p
                    className="text-xs lg:text-xl cursor-pointer hover:text-orange-500"
                    onClick={openDialog}
                >
                    Get Started
                </p>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent onInteractOutside={(e) => e.preventDefault()} className="w-full p-3 lg:p-6 pb-10 lg:pb-12 gap-0 lg:gap-6">
                    <DialogHeader>
                        <DialogTitle>
                            <h2 className='text-sm lg:text-2xl text-left'>Get Started with Federal Forecasting App</h2>
                        </DialogTitle>
                    </DialogHeader>
                    <hr className="mb-3 lg:my-4 border-t-1 border-gray-300" />

                    <Carousel>
                        <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="relative h-32 lg:h-64">
                                <div className="relative flex flex-col items-center justify-center w-full h-full border border-gray-300 rounded-lg p-4 bg-white">
                                    <Image
                                        src={slide.svgSrc}
                                        alt={`${slide.title} SVG`}
                                        className="absolute top-[20px] left-[20%] lg:left-[15%] transform -translate-x-1/2 w-[18%] h-auto sm:w-1/5 md:w-32 lg:w-32"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.title}
                                        className="absolute top-[30px] lg:top-[40px] left-[20%] lg:left-[15%] transform -translate-x-1/2 w-[12%] h-auto max-w-[55px] sm:max-w-[80px] md:max-w-[80px] lg:max-w-[80px]"
                                        width={100}
                                        height={100}
                                    />

                                    <div className="absolute top-[60%] left-[18%] lg:top-[70%] lg:left-[15%] transform -translate-x-1/2 -translate-y-1/2 mt-4">
                                        <DialogTitleDescription className="text-center text-sm sm:text-xl md:text-xl lg:text-2xl uppercase">
                                            {slide.title}
                                        </DialogTitleDescription>
                                    </div>

                                    <div className="absolute top-[10%] left-[29%] leading-3 lg:leading-normal">
                                        <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] mb-4 ml-10 lg:ml-20 lg:mr-20">
                                            {slide.description[0]}
                                        </p>
                                    </div>
                                    <div className="absolute leading-3 lg:leading-normal top-[43%] lg:top-[50%] left-[29%]">
                                        <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] ml-10 lg:ml-20 lg:mr-20">
                                            {slide.description[1]}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselDots/>
                    </Carousel>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default GetStartedDialogContainer;
