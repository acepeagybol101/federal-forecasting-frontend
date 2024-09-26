"use client";

import * as React from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { login } from "@/app/(auth)/login/action";
import { formSchema } from "@/app/(auth)/login/schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
} from "react-icons/hi2";

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    login(formData);
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Image
          src="/images/main.png"
          width={250}
          height={250}
          alt="Logo"
          className="m-auto mb-4"
          priority={true}
        />
        <Card className="w-[500px] rounded-xl overflow-hidden border-0">
          <CardContent className="py-5 px-7 bg-[#F3F3F3]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleLogin)} id="login">
                <div className=" w-full items-center ">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative mt-4">
                          <HiOutlineEnvelope className="absolute text-gray-800 h-auto w-6 my-auto top-0 bottom-0 left-4" />
                          <FormControl>
                            <Input
                              placeholder=""
                              className=" block rounded-full pl-12 appearance-none peer border-0 focus-visible:bg-[#F3F3F3] focus-visible:ring-1 focus-visible:ring-offset-0"
                              {...field}
                              id="email"
                              autoComplete="new-email"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="email"
                            className={
                              (field.value
                                ? "top-1 "
                                : " top-10 peer-focus:top-1 ") +
                              "absolute  !mt-0 cursor-text font-normal text-base  text-gray-500 ml-10  duration-300 transform -translate-y-4 origin-[0] peer-focus:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            }
                          >
                            Email
                          </FormLabel>
                        </div>
                        {/* <FormDescription>
                                                    This is your public display
                                                    name.
                                                </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative mt-4">
                          <HiOutlineLockClosed className="absolute text-gray-800 h-auto w-6 my-auto top-0 bottom-0 left-4" />
                          <FormControl>
                            <Input
                              id="password"
                              type="password"
                              placeholder=""
                              className=" block rounded-full pl-12 appearance-none peer border-0 focus-visible:bg-[#F3F3F3] focus-visible:ring-1 focus-visible:ring-offset-0"
                              {...field}
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="password"
                            className={
                              (field.value
                                ? "top-1 "
                                : " top-10 peer-focus:top-1 ") +
                              "absolute !mt-0 cursor-text font-normal ml-10 text-base  text-gray-500  duration-300 transform -translate-y-4 z-10 origin-[0] peer-focus:bg-[#F3F3F3] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            }
                          >
                            Password
                          </FormLabel>
                          <HiOutlineEye className="absolute text-gray-800 h-auto w-6 my-auto right-4 top-0 bottom-0" />
                        </div>

                        {/* <FormDescription>
                                                    This is your public display
                                                    name.
                                                </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-primary text-right mt-3">
                    Forgot Password?
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="rounded-full w-full mt-5 font-semibold"
                    size={"lg"}
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
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
