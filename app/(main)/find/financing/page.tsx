import React from "react";
import {
  HiChevronRight,
  HiMagnifyingGlass,
  HiOutlineAdjustmentsVertical,
} from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

const FindFinancing = () => {
  return (
    <div>
      <div className="bg-[url('/images/bg-financing.png')] bg-left-bottom min-h-screen bg-no-repeat px-4 md:px-0 bg-opacity-20 lg:p-12" style={{
          backgroundSize: "30%"
        }}>
        <div className="grid grid-cols-2">
          <div className="font-semibold italic text-4xl md:text-5xl text-center text-primary">
            FIND FINANCING
          </div>

          <Card className="relative">
            <CardHeader className="bg-[#E6AE9F] p-12 m-4 rounded-lg">
              <CardTitle className="text-center text-[#34419B] text-3xl font-semibold">Quick Application for Capital</CardTitle>
              <CardDescription className="text-center text-[#34419B]">Enter your desired loan amount.</CardDescription>
            </CardHeader>
            <CardContent className="my-16">
              <Input type="text" value="$0" className="text-center text-[#34419B] text-4xl font-semibold" />
            </CardContent>
            <CardFooter className="flex-col gap-6">
              <Button className="bg-[#E6AE9F] text-[#34419B] px-12">Get Started</Button>
              <small className="text-[#34419B]">It&apos;s completely free and will not affect your credit score.</small>
              <Button variant="ghost" className="text-blue-500">Resume a previous application</Button>
            </CardFooter>
            <div className="w-16 h-16 bg-gray-400 rounded-full border-2 border-white absolute top-[-1.5rem] left-[50%] translate-x-[-50%]"></div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindFinancing;
