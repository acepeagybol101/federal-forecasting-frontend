"use client";

import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";


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
      <section className="bg-[url('/images/learn_banner1.png')] h-[722px]">
          <div className="grid grid-cols-2 px-14 h-full">
            <div className="col-span-1 my-auto space-y-9">
              <h2 className="text-[75px] text-[#063861] font-bold italic max-w-[675px] leading-[97.5px]">WELCOME TO THE <span className="text-white font-extrabold">LEARNING HUB</span></h2>
              <p className="text-sm text-[#063861] max-w-[564px]">At the heart of the Federal Forecasting App is our commitment to empowering you with the knowledge and tools you need to succeed in federal contracting. The Learn section is your central hub for gaining expertise, accessing essential resources, and staying informed about the latest industry trends. Whether you&apos;re just getting started or looking to refine your strategies, this is where you&apos;ll find everything you need to stay ahead in the world of federal contracting.</p>
            </div>
        </div>
      </section>

      <section className="px-14 py-40 space-y-12">
            <div className="space-y-12">
                <h2 className="text-primary text-center font-extrabold md:text-[80px]">
                Learn Through Videos
                </h2>
                <p className="italic text-center text-5xl">Explore Federal Forecasting in Action</p>
            </div>

          <div className="grid grid-cols-3 gap-6">
              <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/X7ruTfo6mm0")}>
                <img
                  src="https://img.youtube.com/vi/X7ruTfo6mm0/0.jpg" // Thumbnail URL
                  alt="Video Thumbnail"
                  className="w-full h-[244px] object-cover" // Adjust size as needed
                />
              </div>
              <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/Qz7xZ0kYmrA")}>
                <img
                  src="https://img.youtube.com/vi/Qz7xZ0kYmrA/0.jpg" // Thumbnail URL
                  alt="Video Thumbnail"
                  className="w-full h-[244px] object-cover" // Adjust size as needed
                />
              </div>
              <div className="md:p-7 cursor-pointer" onClick={() => openModal("https://www.youtube.com/embed/109RzxGNZYU")}>
                <img
                  src="https://img.youtube.com/vi/109RzxGNZYU/0.jpg" // Thumbnail URL
                  alt="Video Thumbnail"
                  className="w-full h-[244px] object-cover" // Adjust size as needed
                />
            </div>
        </div>
        <div className="flex justify-center">
         <button
            className="text-xs lg:text-lg border-2 border-[#F26531] bg-[#F26531] hover:bg-[#D1542E] text-white px-6 py-2 transition duration-200 rounded-full"
            >
            SEE VIDEOS
            </button>
        </div>
      </section>

      <section className="bg-[url('/images/learn_banner2.png')] h-[931px]">
          <div className="grid grid-cols-[1fr_710px] px-14 h-full">
            <div className="col-span-1 my-auto space-y-9">
              <h2 className="text-8xl text-white font-extrabold max-w-[1051px] leading-[124.8px]">Contracting Guides At Your Finger Tips</h2>
              <p className="text-4xl text-white max-w-[766px] italic leading-[46.8px]">Access a wide range of downloadable templates and resources tailored to your contracting needs. From capability statements to proposal guides, you&apos;ll find everything required to streamline your processes.</p>
              <div className="flex justify-center">
                <button
                className="text-xs lg:text-lg border-2 border-[#F26531] bg-[#F26531] hover:bg-[#D1542E] text-white px-6 py-2 transition duration-200 rounded-full"
                >
                See Resources
              </button>
            </div>
            </div>
            <div className="h-[70vh] my-auto flex items-end">
                <p className="italic text-[29.8px]">Your Resource for Navigating Federal Contracts</p>
            </div>
        </div>
      </section>

      <section className="bg-[url('/images/learn_banner3.png')] h-[722px]">
          <div className="grid grid-cols-2 px-14 h-full">
            <div className="col-start-2 col-span-1 my-auto space-y-9">
              <h2 className="text-[70px] text-[#063861] font-extrabold max-w-[659px] leading-[91px]">Uncover Trends <span className="text-[#F26531]">Analyze Policy</span> Predict Outcomes</h2>
              <p className="text-2xl text-[#063861] max-w-[614px] leading-[31.2px]">Stay up to date with the latest news and trends in federal contracting. Get expert analysis, industry reports, and critical updates that help you make informed decisions for your business.</p>
              <div className="flex justify-center">
                    <button
                        className="text-xs lg:text-lg border-2 border-[#F26531] bg-[#F26531] hover:bg-[#D1542E] text-white px-6 py-2 transition duration-200 rounded-full"
                        >
                        See Latest News
                    </button>
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
