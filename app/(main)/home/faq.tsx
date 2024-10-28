import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiChevronDown } from "react-icons/hi2";

const FAQ = () => {
  const dummyData = [
    "How much does the Federal Forecasting App cost?",
    "Who are your target audience?",
    "How can we learn more about the Federal Forecasting App?",
    "How much does the Federal Forecasting App cost?",
    "How much does the Federal Forecasting App cost?",
  ];

  return (
    <div className="bg-[url('/images/bg-faq.png')]">
      <div className="pt-4 md:pt-7 pb-7 md:pb-32  px-4 md:px-0 container">
        <div className="text-center text-2xl md:text-5xl font-bold text-white md:py-16">FAQs</div>
        <Accordion type="single" collapsible className="  text-white">
          {dummyData.map((data, index) => (
            <AccordionItem key={index} value={"item-" + index}>
              <AccordionTrigger className="text-xs md:text-3xl flex items-center hover:no-underline md:py-6">
                <div>{data}</div>
                <HiChevronDown className="ml-auto transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="font-bold text-xs md:text-3xl md:font-normal">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
