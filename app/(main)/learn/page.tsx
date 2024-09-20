import React from "react";

const Learn = () => {
  const dummyData = [
    "New Year 2024 Message from OSBP Director \nCategory: (USTDA) UNITED STATES TRADE AND DEVELOPMENT AGENCY \nNew Year 2024 Message from OSBP Director",
    "GovSales.gov - Federal Asset Sales Program \nCategory: (GSA) General Services Administration \nGovSales.gov - Federal Asset Sales Program",
    "Service-disabled veteran-owned small business \nCategory: (GSA) General Services Administration \nLearn how GSA and OSDBU can assist your service-disabled veteran-owned small business.",
    "New Year 2024 Message from OSBP Director \nCategory: (USTDA) UNITED STATES TRADE AND DEVELOPMENT AGENCY \nNew Year 2024 Message from OSBP Director",
    "GovSales.gov - Federal Asset Sales Program \nCategory: (GSA) General Services Administration \nGovSales.gov - Federal Asset Sales Program",
    "Service-disabled veteran-owned small business \nCategory: (GSA) General Services Administration \nLearn how GSA and OSDBU can assist your service-disabled veteran-owned small business.",
    "New Year 2024 Message from OSBP Director \nCategory: (USTDA) UNITED STATES TRADE AND DEVELOPMENT AGENCY \nNew Year 2024 Message from OSBP Director",
    "GovSales.gov - Federal Asset Sales Program \nCategory: (GSA) General Services Administration \nGovSales.gov - Federal Asset Sales Program",
    "Service-disabled veteran-owned small business \nCategory: (GSA) General Services Administration \nLearn how GSA and OSDBU can assist your service-disabled veteran-owned small business.",
  ];

  return (
    <div className="px-14">
      <div className="font-semibold italic text-[55px] text-center text-primary pt-32 pb-12 border-b border-gray-300">
        FEDERAL FORECASTING TRAINING VIDEOS
      </div>
      <div className="grid grid-cols-3 gap-16 pt-16">
        {dummyData.map((data) => (
          <div key={data}>
            <div className="w-full h-80 bg-gray-600"></div>
            <div className="text-2xl pt-8 font-medium whitespace-pre-line">
              {data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
