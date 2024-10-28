
import { Input } from "@/components/ui/input";
import { FaChartSimple, FaRegImage } from "react-icons/fa6";
import {
  HiBars3,
  HiChevronDown,
  HiMicrophone,
  HiMiniUserGroup,
  HiMiniVideoCamera,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineHeart,
  HiUserCircle,
} from "react-icons/hi2";
import CommunityGuidelinesDialog from "./left-sidebar/channels/community-guidelines-dialog/CommunityGuidelinesDialogContainer";

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
    <div className="grid grid-cols-12 gap-12 px-2 p-9">
      <div className="p-4 col-span-3">
        <h3 className="tracking-wider font-bold text-center text-secondary">
          Welcome to the Community!
        </h3>
        <div className="flex items-center py-10">
          <HiUserCircle className="h-auto w-12 rounded-full  text-secondary" />
          <div className="font-medium text-xl pl-3">Derrick Surratt</div>
        </div>
        <h3 className="border-b border-gray-400 pb-2">Channels</h3>
        <CommunityGuidelinesDialog />
        {/* <div className="text-xl py-8 ">
          <p className="cursor-pointer hover:text-orange-500">Community Guidelines</p>
        </div> */}
        <div className="text-xl pb-14">
          <p className="cursor-pointer hover:text-orange-500">Get Started</p>
        </div>
        <h3 className=" border-b border-gray-400 pb-2 mb-3">Quick Links</h3>
        <div className="flex items-center text-xl py-4">
          <HiMiniUserGroup className="h-auto w-8 text-secondary" />
          <span className="pl-2">Members</span>
        </div>
        <div className="flex items-center text-xl py-4">
          <FaChartSimple className="h-auto w-8 text-secondary" />
          <span className="pl-2">Leaderboards</span>
        </div>
        <div className="flex items-center text-xl py-4">
          <HiMiniUserGroup className="h-auto w-8 text-secondary" />
          <span className="pl-2">Badges</span>
        </div>
      </div>

      <div className="w-full col-span-6 px-24 space-y-5">
        <div className="bg-white rounded-3xl shadow-lg w-full p-7 border">
          <div className="flex items-center pr-24 border-b border-gray-400 pb-6">
            <HiUserCircle className="h-auto w-12  rounded-full  text-secondary" />
            <Input
              id="mind"
              name="mind"
              placeholder="What’s on your mind, Derrict?"
              className="block rounded-full appearance-none w-full h-10  pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#e9e9e9] ml-5"
            />
          </div>
          <div className="grid grid-cols-3 justify-center pt-5">
            <div className="flex items-center m-auto">
              <FaRegImage className=" h-auto w-8 text-primary" />
              <span className="font-medium pl-4">Image</span>
            </div>
            <div className="flex items-center m-auto">
              <HiMiniVideoCamera className=" h-auto w-8 text-primary" />
              <span className=" font-medium pl-4">Video</span>
            </div>
            <div className="flex items-center m-auto">
              <HiMicrophone className=" h-auto w-8 text-primary" />
              <span className=" font-medium pl-4">Audio</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-lg w-full p-7 border">
          <div className="flex items-start">
            <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
            <div className="pl-5">
              <span className="text-xl">Gabby R. (Community Manager)</span>
              <span className="text-lg block">1 hour ago</span>
            </div>
          </div>
          <p className="text-lg p-12">
            ✨ Monday Motivation! ✨ &quot;Success is where preparation and
            opportunity meet.&quot; 💡 It’s not just about waiting for the right
            moment—it’s about being ready when that moment comes. Whether you’re
            prepping for your next government contract or building your
            business, remember that the groundwork you lay today will lead to
            the wins of tomorrow. 🚀 What are you doing to prepare for your next
            big opportunity? Happy Monday!
          </p>
          <div className="flex items-center">
            <HiOutlineHeart className=" h-auto w-8" />
            <span className="text-xl pl-5 pr-10">3 Likes</span>
            <HiOutlineChatBubbleOvalLeftEllipsis className=" h-auto w-8" />
            <span className="text-xl pl-5">0 Comment</span>
          </div>
        </div>
      </div>

      <div className="pl-8 p-4 col-span-3">
        <div>
          <div className="flex border-b border-gray-400 mb-4">
            <h3 className="pb-2">Friends</h3>
            <HiBars3 className="ml-auto w-7 h-7" />
          </div>
          {dummyFriends.map((friend, key) => (
            <div key={key} className="flex items-center py-2">
              <div className="w-14 h-12 bg-gray-300 rounded-full"></div>
              <div className="text-lg w-full pl-2">{friend.name}</div>
              <div
                className={
                  "h-5 w-6 rounded-full " +
                  (friend.isOnline ? "bg-[#00980f]" : "bg-gray-300")
                }
              ></div>
            </div>
          ))}
          <div className="flex mt-5">
            <HiChevronDown className="w-7 h-auto m-auto" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex border-b border-gray-400 mb-4">
            <h3 className=" pb-2">Groups</h3>
            <HiBars3 className="ml-auto w-7 h-7" />
          </div>
          {dummyFriends.map((friend, key) => (
            <div key={key} className="flex items-center py-2">
              <div className="w-14 h-12 bg-gray-300 rounded-full"></div>
              <div className="text-lg w-full pl-2">{friend.name}</div>
              <div
                className={
                  "h-5 w-6 rounded-full " +
                  (friend.isOnline ? "bg-[#00980f]" : "bg-gray-300")
                }
              ></div>
            </div>
          ))}
          <div className="flex mt-5">
            <HiChevronDown className="w-7 h-auto m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
