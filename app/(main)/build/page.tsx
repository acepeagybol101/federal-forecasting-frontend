"use client";

import { useState } from "react";
import PostInput from "./build-content-body/PostInput";
import Channels from "./left-sidebar/channels/ChannelContainer";
import QuickLinksContainer from "./left-sidebar/quick-links/QuickLinksContainer";
import UserInfo from "./left-sidebar/user-info/UserInfoContainer";
import FriendsList from "./right-sidebar/FriendList";
import GroupsList from "./right-sidebar/GroupList";
import Image from "next/image";
import Link from "next/link";
import menuImage from "../../../public/menuBar/Channels.png";
import memberImage from "../../../public/menuBar/members.png";
import leaderBoardsImage from "../../../public/menuBar/leaderboards.png";
import homeImage from "../../../public/menuBar/home.png";
import CommunityGuidelinesDialog from "./left-sidebar/channels/community-guidelines-dialog/CommunityGuidelinesDialogContainer";
import GetStartedDialogContainer from "./left-sidebar/channels/get-started-dialog/GetStartedDialogContainer";
import Post from "@/app/(main)/build/build-content-body/Post";

const Build = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChannels = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-12 lg:px-14 lg:py-7">

      {/* Left Sidebar */}
      <div className="hidden lg:block p-4 col-span-3">
        <h3 className="tracking-wider font-bold text-center text-secondary">
          Welcome to the Community!
        </h3>
        <UserInfo />
        <Channels />
        <QuickLinksContainer />
      </div>

      {/* Main Content */}
      <div className="w-full col-span-6 md:col-span-12 lg:col-span-6 lg:px-2 space-y-5">
        <div className="flex lg:hidden justify-center items-center mb-2 pt-3 bg-white">
          <div className="flex items-center justify-center gap-8 w-full relative">
            <Link href="/home">
              <Image
                src={homeImage}
                alt="Home"
                className="cursor-pointer pb-2"
                width={25}
                height={25}
              />
            </Link>

            <Link href="/build/member">
              <Image
                src={memberImage}
                alt="Members"
                className="cursor-pointer pb-2"
                width={25}
                height={25}
              />
            </Link>
            <Link href="/build/leaderboards">
              <Image
                src={leaderBoardsImage}
                alt="Leaderboards"
                className="cursor-pointer pb-2"
                width={25}
                height={25}
              />
            </Link>
            <Image
              src={menuImage}
              alt="Menu"
              className="cursor-pointer pb-2"
              width={25}
              height={25}
              onClick={toggleChannels}
            />
            {isOpen && (
              <div className="md:hidden absolute bg-white top-10 space-y-2 rounded-lg shadow-md p-3 right-2">
                <CommunityGuidelinesDialog />
                <GetStartedDialogContainer />
              </div>
            )}
          </div>
        </div>

        <div className="px-4 lg:px-0 pb-4 lg:pb-0 space-y-5">
          <PostInput />
          <Post />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block p-4 col-span-3">
        <FriendsList />
        <GroupsList />
      </div>
    </div>
  );
};

export default Build;
