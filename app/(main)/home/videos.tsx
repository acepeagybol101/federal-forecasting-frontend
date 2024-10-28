import * as React from "react";

const Videos = () => {

  return (
    <div className="bg-[url('/images/bg-home-video.png')] bg-cover bg-no-repeat">
      <div className="container">
        <div className="text-center text-5xl font-bold text-white py-16">Videos</div>
        <div className="grid md:grid-cols-4 gap-4 pt-14 pb-36">
          <div>
            <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
            <div className="font-medium text-secondary pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
          <div>
            <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
            <div className="font-medium text-secondary pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
          <div>
            <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
            <div className="font-medium text-secondary pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
          <div>
            <div className="border rounded w-auto h-[252px] bg-gray-800"></div>
            <div className="font-medium text-secondary pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Videos;
