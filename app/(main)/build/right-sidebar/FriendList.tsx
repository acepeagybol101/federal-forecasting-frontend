"use client";

import { HiBars3, HiUserCircle, HiChevronDown } from "react-icons/hi2";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const FriendsList = () => {
    const [users, setUsers] = useState<{
        id: number;
        name: string;
        email: string;
    }[]>([]);

    const router = useRouter();

    useEffect(() => {
         const fetchUsers = async () => {
             const response = await fetch('/api/friends');
             const data = await response.json();
            setUsers(data.users);
         };

         fetchUsers();
    }, []);

    const handleProfileClick = (userId: number) => {
        router.push(`/build/friends-profile/${userId}`);
    };

    return (
        <div>
        <div className="flex justify-between items-center pb-2">
            <h3>Friends</h3>
            <div className="flex flex-col items-center">
                <HiBars3 className="w-7 h-7 cursor-pointer" />
            </div>
        </div>
        <hr className="border-gray-400 mb-4" />
    
        {users?.map(user => (
            <div key={user.id} className="flex flex-col mb-4 pb-2">
                <div className="flex items-center relative">
                    <HiUserCircle 
                        className="w-8 h-8 text-secondary mr-2 cursor-pointer" 
                        onClick={() => handleProfileClick(user.id)} 
                    />
                    <span className="mr-2 text-lg cursor-pointer" onClick={() => handleProfileClick(user.id)}>
                        {user.name}
                    </span>
                    <span className="w-3 h-3 bg-green-500 rounded-full ml-auto"></span> 
                </div>
                <div className="flex justify-center mt-6">
                    <HiChevronDown className="w-7 h-7 text-gray-500 cursor-pointer" />
                </div>
            </div>
        ))}
    </div>
    
    
    
    
    );
};

export default FriendsList;
