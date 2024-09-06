import * as React from "react";

import {
    FaYoutube,
    FaXTwitter,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-secondary p-2 md:px-8 xl:px-20 2xl:px-40 py-7">
            <div className="flex flex-row py-28 border-b-2 border-[#1c5583]">
                <div>
                    <div className="text-primary text-xl">EMAIL</div>
                    <div className="text-white font-medium text-4xl">
                        info@DerrickSuratt.com
                    </div>
                </div>
                <div className="m-auto">
                    <div className="text-primary text-xl">CALL US</div>
                    <div className="text-white font-medium text-4xl">
                        123 456 7890
                    </div>
                </div>
                <div className="ml-auto">
                    <div className="text-primary text-xl">CONNECT</div>
                    <div className="text-white font-medium text-4xl flex space-x-3">
                        <FaXTwitter className="border p-3 rounded-full h-auto w-12" />
                        <FaFacebookF className="border p-3 rounded-full h-auto w-12" />
                        <FaLinkedinIn className="border p-3 rounded-full h-auto w-12" />
                        <FaYoutube className="border p-3 rounded-full h-auto w-12" />
                    </div>
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
