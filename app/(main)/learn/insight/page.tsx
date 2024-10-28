"use client";

import React, { useState } from "react";
import latestNewsImg from "@/public/images/latestNews.png";
import news1 from "@/public/images/news1.png";
import news2 from "@/public/images/news2.png";
import news3 from "@/public/images/news3.png";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots
} from "@/components/ui/carousel";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Insight = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (src: string) => {
    const autoplaySrc = `${src}?autoplay=1&mute=1`; // Enable autoplay
    setSelectedVideo(autoplaySrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div>
      <section className="bg-[url('/images/bg-learn-insight.png')] h-[192px] lg:h-[574px]">
        <div className="bg-black bg-opacity-40 w-full flex h-full">
          <div className="text-white italic font-semibold m-auto lg:space-y-16">
            <h1 className="text-center text-sm lg:text-[55px] m-auto">
              FEDERAL FORECASTING INDUSTRY INSIGHTS
            </h1>
            <p className="text-xs lg:text-[40px] text-center">
              Stay informed with the latest federal news.
            </p>
          </div>
        </div>
      </section>

      <section className="md:p-14 px-4">
        <div className="grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-8">
            <h2 className="text-sm lg:text-5xl font-semibold text-secondary py-5 md:py-0 lg:pl-4 lg:pb-4">
              LATEST NEWS
            </h2>
            <a
              href="https://www.cnbc.com/2024/09/18/fed-bank-of-england-rate-cut-surprises.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={latestNewsImg}
                alt="Latest News"
                className="h-[212px] lg:h-[507px] w-full"
              />
            </a>
            <div className="md:hidden pb-6 border-t mt-4 border-gray-300">
                <Carousel>
                  <h3 className="text-primary font-semibold text-xs lg:text-3xl pt-3 pb-5">
                    Videos
                  </h3>
                  <CarouselContent>
                        <CarouselItem className="grid grid-cols-2 gap-3">
                          <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                            <img
                              src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                              alt="Video Thumbnail"
                              className="w-full h-[97px] object-cover" // Adjust size as needed
                            />
                          </div>
                          <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                            <img
                              src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                              alt="Video Thumbnail"
                              className="w-full h-[97px] object-cover" // Adjust size as needed
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem className="grid grid-cols-2 gap-3">
                          <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                            <img
                              src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                              alt="Video Thumbnail"
                              className="w-full h-[97px] object-cover" // Adjust size as needed
                            />
                          </div>
                          <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                            <img
                              src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                              alt="Video Thumbnail"
                              className="w-full h-[97px] object-cover" // Adjust size as needed
                            />
                          </div>
                        </CarouselItem>
                    </CarouselContent>
                <CarouselDots />
                </Carousel>
            </div>
            <a
              href="https://www.usaid.gov/news-information/press-releases/sep-17-2024-united-states-announces-additional-75-million-development-assistance-moldova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="md:flex items-center mt-4 lg:mt-16 border-t py-4 lg:py-0 lg:pt-8 border-gray-300">
                <Image
                  src={news1}
                  alt="News 1"
                  className="md:w-[483px] h-[131px] lg:h-[301px] flex-shrink-0"
                />
                <h5 className="font-semibold italic md:p-12 text-xs lg:text-xl p-4">
                  The United States Announces an Additional $75 Million in
                  Development Assistance for Moldova September 17, 2024 | Press
                  Release
                </h5>
              </article>
            </a>
            <div className="lg:mt-12 border-t py-4 lg:py-0 lg:pt-8 border-gray-300">
              <div className="grid grid-cols-2 gap-6">
                <article>
                  <a
                    href="https://federalnewsnetwork.com/air-force/2024/09/air-force-to-increase-its-recruitment-goal-in-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={news2}
                      alt="News 2"
                      className="md:w-auto h-[106px] lg:h-[342px]"
                    />
                    <h5 className="italic text-xs lg:text-xl font-semibold pt-4">
                      Air Force to increase its recruitment goal in 2025 AIR
                      FORCE
                    </h5>
                  </a>
                </article>
                <article>
                  <a
                    href="https://federalnewsnetwork.com/federal-newscast/2024/09/air-force-to-meet-recruitment-goals/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={news3}
                      alt="News 3"
                      className="md:w-auto h-[106px] lg:h-[342px]"
                    />
                    <h5 className="italic text-xs lg:text-xl font-semibold pt-4">
                      Air Force to meet recruitment goals FEDERAL NEWSCAST
                    </h5>
                  </a>
                </article>
              </div>
            </div>
          </div>

          <div className="hidden lg:block md:col-span-4">
            <h3 className="text-primary font-semibold text-xs lg:text-4xl p-5 md:p-0 md:pl-10">
              Videos
            </h3>
            <div className="divide-y divide-gray-300">
              <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                <img
                  src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                  alt="Video Thumbnail"
                  className="w-full h-[244px] object-cover" // Adjust size as needed
                />
                <h5 className="text-xs lg:text-xl font-semibold pt-4 px-4">
                  Administrator Power Announces $90 million in Humanitarian Assistance for Gaza
                </h5>
              </div>
              <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                <img
                  src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                  alt="Video Thumbnail"
                  className="w-full h-[244px] object-cover" // Adjust size as needed
                />
                <h5 className="text-xs lg:text-xl font-semibold pt-4 px-4">
                  Administrator Power Announces $90 million in Humanitarian Assistance for Gaza
                </h5>
              </div>
              <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                <img
                  src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                  alt="Video Thumbnail"
                  className="w-full h-[244px] object-cover" // Adjust size as needed
                />
                <h5 className="text-xs lg:text-xl font-semibold pt-4 px-4">
                  Administrator Power Announces $90 million in Humanitarian Assistance for Gaza
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative w-11/12 md:w-3/4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-500 text-white rounded-full p-1 hover:bg-gray-600"
            >
              <HiXMark className="h-5 w-5" />
            </button>
            <div className="w-full" style={{ height: "40rem" }}>
              {selectedVideo && (
                <iframe
                  className="w-full h-full"
                  src={selectedVideo}
                  title="Video"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insight;
