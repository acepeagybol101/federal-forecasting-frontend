import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
    HiOutlineEnvelope,
    HiOutlineLockClosed,
    HiOutlineEye,
} from "react-icons/hi2";

export default function Login() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Image
                    src="/images/main.png"
                    width={250}
                    height={250}
                    alt="Logo"
                    className="m-auto mb-4"
                />
                <Card className="w-[500px] rounded-xl overflow-hidden border-0">
                    <CardContent className="py-5 px-7 bg-[#F3F3F3]">
                        <form>
                            <div className=" w-full items-center ">
                                <div className="relative mt-4">
                                    <HiOutlineEnvelope className="absolute text-gray-800 h-auto w-6 my-auto top-0 bottom-0 left-4" />
                                    <Input
                                        id="email"
                                        placeholder=""
                                        className=" block rounded-full pl-12 appearance-none peer border-0 focus-visible:bg-[#F3F3F3] focus-visible:ring-1 focus-visible:ring-offset-0"
                                    />
                                    <Label
                                        htmlFor="email"
                                        className="absolute cursor-text font-normal text-base  text-gray-500 ml-10  duration-300 transform -translate-y-4 top-10 z-10 origin-[0] peer-focus:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >
                                        Email
                                    </Label>
                                </div>
                                <div className="relative mt-4">
                                    <HiOutlineLockClosed className="absolute text-gray-800 h-auto w-6 my-auto top-0 bottom-0 left-4" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder=""
                                        className="block rounded-full pl-12 appearance-none peer border-0 focus-visible:bg-[#F3F3F3] focus-visible:ring-1 focus-visible:ring-offset-0"
                                    />
                                    <HiOutlineEye className="absolute text-gray-800 h-auto w-6 my-auto right-4 top-0 bottom-0" />
                                    <Label
                                        htmlFor="password"
                                        className="absolute cursor-text font-normal ml-10 text-base  text-gray-500  duration-300 transform -translate-y-4 top-10 z-10 origin-[0] peer-focus:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >
                                        Password
                                    </Label>
                                </div>
                                <div className="text-primary text-right mt-3">
                                    Forgot Password?
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="rounded-full w-full mt-5 font-semibold text-base"
                                    size="lg"
                                >
                                    Sign In
                                </Button>
                                <p className=" text-center my-4">
                                    Don’t have an account?
                                    <span className="text-primary font-medium pl-1 cursor-pointer">
                                        Sign Up
                                    </span>
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
