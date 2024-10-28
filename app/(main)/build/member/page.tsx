"use client"
import { useState } from 'react';
import MemberCard from './components/MemberCard';
import FriendRequestCard from './components/FriendRequestCard';
import SuggestionFriends from './components/SuggestionFriends';
import Group from './components/Group';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Image from "next/image";
import userImg from '../../../../public/images/userImg.png';
import userImg2 from '../../../../public/images/userImg2.png';
import userImg3 from '../../../../public/images/userImg3.jpg';

const Member = () => {
    const dummyTabs = ['ALL FRIENDS', 'FRIEND REQUESTS', 'SUGGESTIONS', 'GROUPS'];
    const [activeTab, setActiveTab] = useState('ALL FRIENDS');
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };


    return (
        <div className="grid md:grid-cols-12 gap-4 border border-blue-500 h-screen">
            {/* Sidebar */}
            <div className="hidden md:block col-span-3 bg-white border-r">
                <div className="text-3xl text-secondary font-semibold border-b border-gray-300 p-6">
                    MEMBERS
                </div>
                <Tabs tabs={dummyTabs} activeTab={activeTab} onTabChange={handleTabChange} />
            </div>

            {/* Content */}
            <div className="md:col-span-9">
                <div className=" border-b border-gray-300 p-6 flex justify-between">
                    <p className='text-sm sm:text-3xl text-secondary font-semibold'>{activeTab}</p>
                    <SearchBar />
            </div>

                {activeTab === 'ALL FRIENDS' && (
                    <div className="grid md:grid-cols-2 gap-6 p-7">
                            <MemberCard />
                     </div>
                )}
                 {activeTab === 'FRIEND REQUESTS' && (
                    <div className="grid md:grid-cols-2 gap-6 p-7">
                            <FriendRequestCard />
                    </div>
                )}

                {activeTab === 'SUGGESTIONS' && (
                    <div className="grid md:grid-cols-2 gap-6 p-7">
                        <SuggestionFriends />
                    </div>
                )}
                 {activeTab === 'GROUPS' && (
                    <div className="grid md:grid-cols-2 gap-6 p-7">
                        <Group name="FFA-Group" numOfMembers={8} />
                    </div>
                )}

            </div>
        </div>
    );
};

export default Member;
