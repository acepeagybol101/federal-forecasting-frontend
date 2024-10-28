import * as React from "react";

import { categories } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="relative pb-20 md:pb-0 pt-8 md:pt-24">
      <div className="container px-4 md:px-0">
      <h2 className="text-base md:text-5xl text-secondary text-center font-bold py-8 md:py-16">Select Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:p-40 md:pt-2">
        {categories.map((category, key) => (
            <Card
              key={key}
              className=" border-secondary bg-white"
            >
            <CardContent className="text-gray-600 h-full flex flex-col justify-end px-0 md:gap-6 py-4 md:py-8">
                <div className="flex justify-center m-auto relative w-[4.5rem] md:w-28 py-4 md:py-8 border-2 border-[#00ba00] rounded-full">
                  <Image
                      src={category.icon}
                      width={42}
                      height={42}
                      alt="Logo"
                      className="m-auto w-[32px] h-[32px] md:w-[42px] md:h-[42px]"
                  />
                </div>
                <h3 className="font-semibold text-xs md:text-3xl md:leading-9 text-center py-2 md:h-20">
                {category.title}
                </h3>
                <p className="text-xs md:text-xl text-center md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </CardContent>
            </Card>
        ))}
        </div>
        <Image
            src='/images/blob-top-right.png'
            width={625}
            height={600}
            alt="Background shape"
            className="absolute -top-10 -left-0 -z-10  w-[156px] h-[166px] md:w-[625px] md:h-[600px]"
          />
          <Image
            src='/images/blob-bottom-right.png'
            width={625}
            height={600}
            alt="Background shape"
            className="md:hidden absolute -bottom-5 -right-0 md:-top-20 md:-left-10 -z-10  w-[156px] h-[166px] md:w-[625px] md:h-[600px]"
          />
      </div>
    </div>
  );
};

export default Categories;
