import * as React from "react";

import {
  HiMiniUserGroup,
  HiBars3,
  HiChevronDown,
  HiMiniUserCircle,
  HiMiniVideoCamera,
  HiMicrophone,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";
import { FaRegImage, FaChartSimple } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

const dummyFriends = [
  {
    name: "S. Orinthia Duncan",
    isOnline: true,
  },
  {
    name: "Gabby Roxas",
    isOnline: true,
  },
  {
    name: "S. Orinthia Duncan",
    isOnline: true,
  },
  {
    name: "S. Orinthia Duncan",
    isOnline: true,
  },
  {
    name: "S. Orinthia Duncan",
    isOnline: false,
  },
  {
    name: "S. Orinthia Duncan",
    isOnline: false,
  },
];

const Build = () => {
  return (
    <div className="grid grid-cols-12 p-9">
      <div className="p-4 col-span-3">
        <div className="text-4xl font-bold text-center text-secondary">
          Welcome to the Communtity!
        </div>
        <div className="flex items-center py-10">
          <HiMiniUserCircle className="h-14 w-14  rounded-full  text-secondary" />
          <div className="font-medium text-3xl pl-3">Derrick Surrat</div>
        </div>
        <div className="text-3xl border-b border-gray-400 pb-2">Channels</div>
        <div className="text-2xl py-9">Community Guidelines</div>
        <div className="text-2xl pb-14">Get Started</div>
        <div className="text-3xl border-b border-gray-400 pb-2">
          Quick Links
        </div>
        <div className="flex items-center text-2xl py-4">
          <HiMiniUserGroup className="w-12 h-12 text-secondary" />
          <span className="pl-2">Members</span>
        </div>
        <div className="flex items-center text-2xl py-4">
          <FaChartSimple className="w-12 h-12 text-secondary" />
          <span className="pl-2">Leaderboards</span>
        </div>
        <div className="flex items-center text-2xl py-4">
          <HiMiniUserGroup className="w-12 h-12 text-secondary" />
          <span className="pl-2">Badges</span>
        </div>
      </div>

      <div className="w-full col-span-6 space-y-5">
        <div className="bg-white rounded-3xl shadow-lg w-full p-7 border">
          <div className="flex items-center pr-24 border-b border-gray-400 pb-6">
            <HiMiniUserCircle className="h-20 w-20  rounded-full  text-secondary" />
            <Input
              id="mind"
              name="mind"
              placeholder="What’s on your mind, Derrict?"
              className="block rounded-full appearance-none w-full h-14 text-lg pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#e9e9e9] ml-10"
            />
          </div>
          <div className="grid grid-cols-3 justify-center pt-5">
            <div className="flex items-center m-auto">
              <FaRegImage className=" h-12 w-12 text-primary" />
              <div className="text-3xl font-medium pl-4">Image</div>
            </div>
            <div className="flex items-center m-auto">
              <HiMiniVideoCamera className=" h-12 w-12 text-primary" />
              <div className="text-3xl font-medium pl-4">Video</div>
            </div>
            <div className="flex items-center m-auto">
              <HiMicrophone className=" h-12 w-12 text-primary" />
              <div className="text-3xl font-medium pl-4">Audio</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-lg w-full p-7 border">
          <div className="flex items-start">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            <div className="pl-5">
              <div className="text-3xl">Gabby R. (Community Manager)</div>
              <div className="text-2xl">1 hour ago</div>
            </div>
          </div>
          <p className="text-2xl p-12">
            ✨ Monday Motivation! ✨ &quot;Success is where preparation and
            opportunity meet.&quot; 💡 It’s not just about waiting for the right
            moment—it’s about being ready when that moment comes. Whether you’re
            prepping for your next government contract or building your
            business, remember that the groundwork you lay today will lead to
            the wins of tomorrow. 🚀 What are you doing to prepare for your next
            big opportunity? Happy Monday! 
          </p>
          <div className="flex items-center">
            <HiOutlineHeart className="w-12 h-12" />
            <span className="text-3xl pl-5 pr-10">3 Likes</span>
            <HiOutlineChatBubbleOvalLeftEllipsis className="w-12 h-12" />
            <span className="text-3xl pl-5">0 Comments</span>
          </div>
        </div>
      </div>

      <div className="pl-8 p-4 col-span-3">
        <div>
          <div className="flex border-b border-gray-400 mb-4">
            <div className="text-3xl pb-2">Friends</div>
            <HiBars3 className="ml-auto w-7 h-7" />
          </div>
          {dummyFriends.map((friend, key) => (
            <div key={key} className="flex items-center py-2">
              <div className="w-16 h-14 bg-gray-300 rounded-full"></div>
              <div className="text-2xl w-full pl-2">{friend.name}</div>
              <div
                className={
                  "h-5 w-6 rounded-full " +
                  (friend.isOnline ? "bg-[#00980f]" : "bg-gray-300")
                }
              ></div>
            </div>
          ))}
          <div className="flex mt-5">
            <HiChevronDown className="w-9 h-9 m-auto" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex border-b border-gray-400 mb-4">
            <div className="text-3xl pb-2">Groups</div>
            <HiBars3 className="ml-auto w-7 h-7" />
          </div>
          {dummyFriends.map((friend, key) => (
            <div key={key} className="flex items-center py-2">
              <div className="w-16 h-14 bg-gray-300 rounded-full"></div>
              <div className="text-2xl w-full pl-2">{friend.name}</div>
              <div
                className={
                  "h-5 w-6 rounded-full " +
                  (friend.isOnline ? "bg-[#00980f]" : "bg-gray-300")
                }
              ></div>
            </div>
          ))}
          <div className="flex mt-5">
            <HiChevronDown className="w-9 h-9 m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
