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
    <div className="px-4 md:px-14">
      <div className="font-semibold italic text-4xl md:text-5xl text-center text-primary md:pt-32 pt-12 pb-12 border-b border-gray-300">
        FEDERAL FORECASTING TRAINING VIDEOS
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 py-16">
        {dummyData.map((data) => (
          <div key={data}>
            <div className="w-full h-80 bg-gray-600"></div>
            <div className="md:text-xl pt-8 font-medium whitespace-pre-line p-4">
              {data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
