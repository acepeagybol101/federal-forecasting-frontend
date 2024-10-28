"use client";
import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";

const Learn = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoData = [
    {
      title: "New Year 2024 Message from OSBP Director",
      category: "(USTDA) UNITED STATES TRADE AND DEVELOPMENT AGENCY",
      thumbnail: "https://img.youtube.com/vi/X7ruTfo6mm0/0.jpg",
      src: "https://www.youtube.com/embed/X7ruTfo6mm0",
    },
    {
      title: "GovSales.gov - Federal Asset Sales Program",
      category: "(GSA) General Services Administration",
      thumbnail: "https://img.youtube.com/vi/109RzxGNZYU/0.jpg",
      src: "https://www.youtube.com/embed/109RzxGNZYU",
    },
    {
      title: "Service-disabled veteran-owned small business",
      category: "(GSA) General Services Administration",
      thumbnail: "https://img.youtube.com/vi/q7rqtHAMx0A/0.jpg",
      src: "https://www.youtube.com/embed/q7rqtHAMx0A",
    },
    {
      title: "New Year 2024 Message from OSBP Director",
      category: "(USTDA) UNITED STATES TRADE AND DEVELOPMENT AGENCY",
      thumbnail: "https://img.youtube.com/vi/X7ruTfo6mm0/0.jpg",
      src: "https://www.youtube.com/embed/X7ruTfo6mm0",
    },
    {
      title: "GovSales.gov - Federal Asset Sales Program",
      category: "(GSA) General Services Administration",
      thumbnail: "https://img.youtube.com/vi/109RzxGNZYU/0.jpg",
      src: "https://www.youtube.com/embed/109RzxGNZYU",
    },
    {
      title: "Service-disabled veteran-owned small business",
      category: "(GSA) General Services Administration",
      thumbnail: "https://img.youtube.com/vi/q7rqtHAMx0A/0.jpg",
      src: "https://www.youtube.com/embed/q7rqtHAMx0A",
    },
    {
      title: "New Year 2024 Message from OSBP Director",
      category: "(USTDA) UNITED STATES TRADE AND DEVELOPMENT AGENCY",
      thumbnail: "https://img.youtube.com/vi/X7ruTfo6mm0/0.jpg",
      src: "https://www.youtube.com/embed/X7ruTfo6mm0",
    },
    {
      title: "GovSales.gov - Federal Asset Sales Program",
      category: "(GSA) General Services Administration",
      thumbnail: "https://img.youtube.com/vi/109RzxGNZYU/0.jpg",
      src: "https://www.youtube.com/embed/109RzxGNZYU",
    },
    {
      title: "Service-disabled veteran-owned small business",
      category: "(GSA) General Services Administration",
      thumbnail: "https://img.youtube.com/vi/q7rqtHAMx0A/0.jpg",
      src: "https://www.youtube.com/embed/q7rqtHAMx0A",
    },
  ];

  const openModal = (src: string) => {
    const autoplaySrc = `${src}?autoplay=1&mute=1`;
    setSelectedVideo(autoplaySrc);
    setModalOpen(true);
  };
  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div className="px-4 md:px-14">
      <h1 className="font-semibold italic text-sm md:text-5xl text-center text-primary md:pt-32 pt-8 py-4 lg:py-12">
        FEDERAL FORECASTING TRAINING VIDEOS
      </h1>

      <hr className="mb-3 lg:my-4 border-t-1 border-gray-300" />
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 py-4 px-6 lg:px-0 lg:py-16">
        {videoData.map((video, index) => (
          <div key={index} onClick={() => openModal(video.src)} className="cursor-pointer">
            <div className="w-full h-56 bg-gray-600">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            </div>
            <h5 className="text-xs md:text-xl lg:pt-8 font-medium whitespace-pre-line p-4">
              {video.title} <br />
              Category: {video.category}
            </h5>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-transparent p-4 rounded shadow-lg relative w-11/12 md:w-3/4">
            <button onClick={closeModal} className="absolute top-2 right-2 bg-gray-500 text-white rounded-full p-1 hover:bg-gray-600">
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

export default Learn;
