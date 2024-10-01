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
      <AlertDialogContent className="max-w-[850px] max-h-[900px] px-20 py-12 !rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center">
            <Image
              src="/images/sdvosb-logo.png"
              width={200}
              height={200}
              alt="Logo"
            />
            <div className="font-semibold pl-10">
              <div className=" text-5xl leading-[83px]">DV SOLUTIONS LLC</div>
              <div className="text-4xl text-gray-400">CONSTRUCTION</div>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-10">
            <div className="flex items-center py-3">
              <HiOutlineEnvelope className="w-14 h-14 mr-11" />
              <div className="text-4xl">Derrick@dvsolutionsar.com</div>
            </div>
            <div className="flex items-center py-3">
              <HiOutlinePhone className="w-14 h-14 mr-11" />
              <div className="text-4xl">(501) 303-0935</div>
            </div>
            <div className="flex items-center py-3">
              <HiOutlineGlobeAlt className="w-14 h-14 mr-11" />
              <div className="text-4xl">www.dvsolutionsllc.com</div>
            </div>
            <div className="flex items-center py-3">
              <HiOutlineMapPin className="w-14 h-14 mr-11" />
              <div className="text-4xl">Arkansas</div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="m-auto rounded-full text-4xl px-20 bg-primary h-20">
            CONNECT
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Show;
