import * as React from "react";

import Image from "next/image";
import {
    FaYoutube,
    FaXTwitter,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-secondary p-2 md:px-8 xl:px-20 2xl:px-40 py-7">
            <div className="flex flex-col items-center space-y-4 py-12 border-b-2 border-[#1c5583]">
                <div className="flex space-x-4">
                    <div>
                        <Image
                            src="/images/federal-logo-white.png"
                            width={346}
                            height={0}
                            alt="Logo"
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/sba-logo.png"
                            width={112}
                            height={0}
                            alt="Logo"
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/sdvosb-logo.png"
                            width={154}
                            height={0}
                            alt="Logo"
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/arkansas-logo.png"
                            width={145}
                            height={0}
                            alt="Logo"
                            className=""
                        />
                    </div>
                </div>
                <div className="text-white font-medium text-4xl">
                    120 E. Washington St, Camden, AR 71701
                </div>
                <div className="text-white font-medium text-4xl">
                    123 456 7890
                </div>
                <div className="text-white font-medium text-4xl">
                    info@DerrickSuratt.com
                </div>
                <div className="text-white font-medium text-4xl flex space-x-4">
                    <FaXTwitter className="border p-3 rounded-full h-auto w-14" />
                    <FaFacebookF className="border p-3 rounded-full h-auto w-14" />
                    <FaLinkedinIn className="border p-3 rounded-full h-auto w-14" />
                    <FaYoutube className="border p-3 rounded-full h-auto w-14" />
                </div>
            </div>
            <div className="flex text-white pt-8 pb-4">
                <div className="text-xl">
                    © 2024 Federal Forecasting App. All Rights Reserved.
                </div>
                <div className="ml-auto text-xl">
                    Privacy Policy | Terms of Service
                </div>
            </div>
        </div>
    );
}
