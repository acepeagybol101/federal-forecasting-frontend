"use client";
import { useParams } from 'next/navigation'; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import noPost from '@/public/images/noPost.png';
import { HiUserCircle, HiOutlineDotsHorizontal } from "react-icons/hi";
import Loading from "@/components/ui/loading";

interface PostType {
    id: number;
    user_id: number;
    title: string;
    image?: string;
    audio?: string;
    video?: string;
    userName: string;
}

interface User {
    id: number;
    name: string;
}

const FriendProfile = () => {
    const { userId } = useParams(); 
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<PostType[]>([]);
    const [user, setUser] = useState<User | null>(null);
    
    const fetchUser = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/posts/friends-post/friends-data?userId=${userId}`);
            const data = await response.json();
            console.log("users:", data);
            if (response.ok) {
                setUser(data.user);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };
 

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/posts/friends-post?userId=${userId}`);
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    setPosts(data.posts);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
        fetchUser();
    }, []);

    return (
        <div className="px-14">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pb-10">
            <div className="col-span-3 mt-4">
                <div className="bg-white rounded-3xl p-4 flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center">
                        <HiUserCircle className="w-full h-full text-secondary" />
                    </div>
                    <h1 className="text-2xl font-bold mt-5 text-center">
                            {loading ? "Loading..." : user ? user.name : "User not found"}
                        </h1>
                    <div className="mt-2 text-md text-left w-full">
                        <p className='text-lg font-bold mt-12'>NAICS Code:</p>
                        <p className='mt-4'></p>
                        <hr className="my-4 w-full border-gray-300" />
                        <p className='text-lg font-bold mt-4'>State:</p>
                        <p className='mt-2'></p>
                        <hr className="my-4 w-full border-gray-300" />
                        <p className='text-lg font-bold mt-4'>Location:</p>
                        <p className='mt-2'></p>
                        <hr className="my-4 w-full border-gray-300" />
                        <p className='text-lg font-bold mt-4'>Interests:</p>
                        <ul className='mt-2 list-disc list-inside pl-5'></ul>
                    </div>
                    <hr className="my-4 w-full border-gray-300" />
                </div>
            </div>

            <div className="col-span-6 mt-4">
                <div className="bg-white rounded-3xl p-4 flex flex-col items-center">
                    <h1 className="text-2xl font-bold mt-4">POST</h1>
                    {loading ? (
                        <Loading /> 
                    ) : posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="bg-white rounded-3xl shadow-lg w-full p-7 mt-4 border mx-auto">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-start">
                                        <div className="w-14 h-14 flex items-center justify-center">
                                            <HiUserCircle className="w-full h-full text-secondary" />
                                        </div>
                                        <div className="pl-5">
                                            <span className="text-xl">{post.userName}</span>
                                            <span className="text-lg block">now</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hover:text-blue-500">
                                    <p className="text-lg p-4">{post.title}</p>
                                    {post.image && (
                                        <img src={post.image} className="max-h-full w-full object-cover rounded-lg mb-2" />
                                    )}
                                    {post.audio && (
                                        <audio controls className="w-full my-2">
                                            <source src={post.audio} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    )}
                                    {post.video && (
                                        <video controls className="w-full my-2">
                                            <source src={post.video} type="video/mp4" />
                                            Your browser does not support the video element.
                                        </video>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <Image
                                src={noPost}
                                width={300}
                                height={300}
                                className="rounded-full mt-24"
                                alt="No post found"
                            />
                            <h1 className="text-2xl font-bold mt-4 mb-24">NO POST FOUND</h1>
                        </>
                    )}
                </div>
            </div>

            <div className="col-span-3 mt-4">
                <div className="bg-white rounded-3xl p-4 text-2xl mb-6">
                    <h1 className="text-xl font-bold">FRIENDS</h1>
                </div>
                <div className="bg-white rounded-3xl p-4 text-2xl">
                    <h1 className="text-xl font-bold">GROUPS</h1>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FriendProfile;


