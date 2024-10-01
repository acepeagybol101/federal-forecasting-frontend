import * as React from "react";

const Videos = () => {

  return (
    <div className="bg-[url('/images/bg-home-video.png')] bg-cover bg-no-repeat px-4 pt-36 md:px-8 xl:px-20 2xl:px-40">
    <div className="py-16 text-5xl text-secondary text-center font-bold">
      Videos
    </div>

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
  );
};

export default Videos;
