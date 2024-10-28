import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from "react-icons/hi2";

const Show = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-[80%] lg:max-w-[850px] max-h-[900px] p-8 lg:px-20 lg:py-12 !rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 lg:gap-10">
            <Image
              src="/images/sdvosb-logo.png"
              width={200}
              height={200}
              alt="Logo"
              className="w-[88px] h-[88px] lg:w-[200px] lg:h-[200px]"
            />
            <div className="font-semibold">
              <h5 className="text-sm lg:text-5xl leading-[40px] lg:leading-[83px]">DV SOLUTIONS LLC</h5>
              <p className="text-sm lg:text-4xl text-gray-400 text-left">CONSTRUCTION</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="lg:pt-10">
            <div className="flex items-center py-3">
              <HiOutlineEnvelope className="w-7 h-7 lg:w-14 lg:h-14 mr-2 lg:mr-11" />
              <p className="text-sm lg:text-4xl">Derrick@dvsolutionsar.com</p>
            </div>
            <div className="flex items-center py-3">
              <HiOutlinePhone className="w-7 h-7 lg:w-14 lg:h-14 mr-2 lg:mr-11" />
              <p className="text-sm lg:text-4xl">(501) 303-0935</p>
            </div>
            <div className="flex items-center py-3">
              <HiOutlineGlobeAlt className="w-7 h-7 lg:w-14 lg:h-14 mr-2 lg:mr-11" />
              <p className="text-sm lg:text-4xl">www.dvsolutionsllc.com</p>
            </div>
            <div className="flex items-center py-3">
              <HiOutlineMapPin className="w-7 h-7 lg:w-14 lg:h-14 mr-2 lg:mr-11" />
              <p className="text-sm lg:text-4xl">Arkansas</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="m-auto rounded-full text-sm lg:text-4xl lg:px-20 bg-primary lg:h-20">
            CONNECT
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Show;
