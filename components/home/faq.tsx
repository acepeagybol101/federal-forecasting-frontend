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
    <div className="pb-6">
      <div className="text-center text-5xl font-bold text-white py-5">FAQs</div>
      <Accordion type="single" collapsible className="  text-white">
        {dummyData.map((data, index) => (
          <AccordionItem key={index} value={"item-" + index}>
            <AccordionTrigger className="text-3xl flex items-center hover:no-underline py-6">
              <div>{data}</div>
              <HiChevronDown className="ml-auto transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="text-3xl">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
