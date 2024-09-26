import React from "react";

const Insight = () => {
  return (
    <div>
      <div className="bg-[url('/images/bg-learn-insight.png')] h-[574px]">
        <div className="bg-black bg-opacity-40 w-full flex h-full">
          <div className="text-white italic font-semibold m-auto">
            <div className=" text-[55px] m-auto ">
              FEDERAL FORECASTING INDUSTRY INSIGHTS
            </div>
            <div className="text-[40px] text-center pt-2">
              Stay informed with the latest federal news.
            </div>
          </div>
        </div>
      </div>

      <div className="p-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="text-5xl font-semibold text-secondary pb-5 pl-5">
              LATEST NEWS
            </div>
            <div className="bg-gray-300 h-[667px] w-full"></div>
            <div className="flex items-center mt-16 border-t pt-8 border-gray-300">
              <div className="bg-gray-300 w-[683px] h-[371px] flex-shrink-0"></div>
              <div className="font-semibold italic text-3xl p-12">
                The United States Announces an Additional $75 Million in
                Development Assistance for Moldova September 17, 2024 | Press
                Release
              </div>
            </div>
            <div className="mt-12 border-t pt-8 border-gray-300">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-300 h-[342px] w-auto"></div>
                  <div className="italic text-xl font-semibold pt-4">
                    Air Force to increase its recruitment goal in 2025 AIR FORCE
                  </div>
                </div>
                <div>
                  <div className="bg-gray-300 h-[342px] w-auto"></div>
                  <div className="italic text-xl font-semibold pt-4">
                    Air Force to meet recruitment goals FEDERAL NEWSCAST
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-primary font-semibold text-4xl pl-10">
              Videos
            </div>
            <div className=" divide-y divide-gray-300">
              {[1, 2, 3, 4].map((key) => (
                <div key={key} className="p-7">
                  <div className="bg-gray-300 h-[244px] w-auto"></div>
                  <div className="text-xl font-semibold pt-4 px-4">
                    Administrator Power Announces $90 million in Humanitarian
                    Assistance for Gaza
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;
