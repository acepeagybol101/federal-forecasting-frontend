"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import noPost from '../../../../public/images/noPost.png';
import { useSession } from "next-auth/react";
import { HiOutlineHeart, HiUserCircle, HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiMicrophone, HiMiniVideoCamera, HiXMark } from "react-icons/hi2";
import Loading from "@/components/ui/loading";
import { Dialog, ImageCardContent } from "@/components/ui/dialog";
import { FaRegImage } from "react-icons/fa";
import { storage } from "@/app/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface PostType {
    id: number;
    user_id: number;
    title: string;
    image?: string;
    audio?: string;
    video?: string;
    userName: string;
}

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputText, setInputText] = useState<string>("");
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState<PostType | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/posts/profile-post');
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
    }, []);

    const userId = session?.user?.id ? Number(session.user.id) : null;

    const toggleDropdown = (postId: number) => {
        setDropdownOpen(dropdownOpen === postId ? null : postId);
    };

 
    const handleEdit = (postId: number) => {
        const postToEdit = posts.find(post => post.id === postId);
        if (postToEdit) {
            setCurrentPost(postToEdit);
            setInputText(postToEdit.title); 
            setFile(null);  
            setPreviewURL(postToEdit.image || postToEdit.audio || postToEdit.video || null); 
            setIsCardOpen(true);
        }
        setDropdownOpen(null);
    };

   const handleDelete = async (postId: number) => {
    try {
        const response = await fetch('/api/posts/profile-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId }),
        });

        const data = await response.json();
        window.location.reload();
        if (!response.ok) {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
    setDropdownOpen(null);
};

const removeFile = () => {
    setFile(null);
    setPreviewURL(null);
  };

  const openFileSelector = (type: "audio" | "video" | "image") => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = type === "audio" ? "audio/*" : type === "video" ? "video/*" : "image/*";
    input.onchange = handleFileChange;
    input.click();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const selectedFile = target.files[0];
        setFile(selectedFile);  
        const fileURL = URL.createObjectURL(selectedFile); 
        setPreviewURL(fileURL); 
    }
};

const handleUploadEdit = async () => {
    if (!currentPost) return;

    let updatedPost: PostType = {
        ...currentPost,
        id: currentPost.id,
        title: inputText,
        image: currentPost.image,
        audio: currentPost.audio,
        video: currentPost.video,
    };

    try {
        // Handle file upload to Firebase
        if (file) {
            const storageRef = ref(storage, `posts/${file.name}`);
            await uploadBytes(storageRef, file);
            const fileURL = await getDownloadURL(storageRef);

            // Update the corresponding field based on the file type
            if (file.type.startsWith("image/")) {
                updatedPost.image = fileURL;
            } else if (file.type.startsWith("audio/")) {
                updatedPost.audio = fileURL;
            } else if (file.type.startsWith("video/")) {
                updatedPost.video = fileURL;
            }
        }

        const response = await fetch('/api/posts/profile-post', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }

        setPosts(prevPosts =>
            prevPosts.map(post => (post.id === currentPost.id ? updatedPost : post))
        );

        setIsCardOpen(false);
    } catch (error) {
        console.error('Error updating post:', error);
    } finally {
        setInputText('');
        setFile(null);  
        setPreviewURL(null); 
        setCurrentPost(null);
    }
};

    return (
        <div className="p-4 lg:px-14">
            <div className="grid grid-cols-3 lg:grid-cols-12 gap-4 lg:gap-6 pb-10">
                <div className="col-span-3">
                    <div className="bg-white rounded-3xl p-4 flex flex-col items-center">
                        <div className="w-10 h-fit lg:w-20 lg:h-20 flex items-center justify-center">
                            <HiUserCircle className="w-full h-full text-secondary" />
                        </div>
                        <h1 className="text-base lg:text-2xl font-bold mt-5 text-center">{session?.user?.name}</h1>
                        <div className="mt-6 lg:mt-14 text-md text-left w-full">
                            <p className='text-xs lg:text-lg font-bold'>NAICS Code:</p>
                            <p className='mt-4'></p>
                            <hr className="my-4 w-full border-gray-300" />
                            <p className='text-xs lg:text-lg font-bold mt-4'>State:</p>
                            <p className='mt-2'></p>
                            <hr className="my-4 w-full border-gray-300" />
                            <p className='text-xs lg:text-lg font-bold mt-4'>Location:</p>
                            <p className='mt-2'></p>
                            <hr className="my-4 w-full border-gray-300" />
                            <p className='text-xs lg:text-lg font-bold mt-4'>Interests:</p>
                            <ul className='mt-2 list-disc list-inside pl-5'></ul>
                        </div>
                        <hr className="my-4 w-full border-gray-300" />
                    </div>
                </div>

                <div className="col-span-3 lg:col-span-6">
                    <div className="bg-white rounded-[20px] lg:rounded-3xl p-4 flex flex-col items-center">
                        <h1 className="text-base lg:text-2xl font-bold mt-4">POST</h1>
                        {loading ? (
                            <Loading />
                        ) : posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post.id} className="bg-white rounded-3xl shadow-sm lg:shadow-lg w-full p-3 lg:p-7 mt-4 border mx-auto">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-start">
                                            <div className="h-fit w-14 lg:h-14 flex items-center justify-center">
                                                <HiUserCircle className="w-10 h-10 lg:w-full lg:h-full text-secondary" />
                                            </div>
                                            <div className="pl-2 lg:pl-5">
                                                <span className="text-xs lg:text-xl">{post.userName}</span>
                                                <span className="text-[10px] lg:text-lg block">now</span>
                                            </div>
                                        </div>
                                        <div className="relative cursor-pointer" onClick={() => toggleDropdown(post.id)}>
                                            <HiOutlineDotsHorizontal className="w-4 h-4 lg:w-6 lg:h-6 text-gray-500 hover:text-gray-800" />
                                            {dropdownOpen === post.id && (
                                                <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md z-10">
                                                    <ul>
                                                        <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleEdit(post.id)}>Edit</li>
                                                        <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDelete(post.id)}>Delete</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="hover:text-blue-500">
                                        <p className="text-xs lg:text-lg p-4">{post.title}</p>
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

                <div className="col-span-3">
                    <div className="bg-white rounded-3xl p-4 text-2xl mb-6">
                        <h1 className="text-base lg:text-xl font-bold">FRIENDS</h1>
                    </div>
                    <div className="bg-white rounded-3xl p-4 text-2xl">
                        <h1 className="text-base lg:text-xl font-bold">GROUPS</h1>
                    </div>
                </div>
            </div>
            <Dialog open={isCardOpen} onOpenChange={setIsCardOpen}>
                    <ImageCardContent className="w-full max-w-xs p-4">
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <h2 className="text-base lg:text-2xl font-semibold text-gray-800">Edit Your Post</h2>
                            <div className="border-2 border-[#063861] p-4 rounded-lg w-full flex flex-col items-center space-y-4">
                                <textarea
                                    value={inputText}
                                    onChange={handleInputChange}
                                    placeholder="Type something..."
                                    className="p-2 text-xs lg:text-lg border border-gray-300 rounded-lg w-full pt-4 pb-2 h-40 focus:outline-none focus:ring-2 focus:ring-[#063861] transition duration-200 resize-none"
                                    rows={4}
                                />

                            {previewURL && (
                                <div className="w-full mt-4 flex flex-col items-center relative">
                                    {file ? ( 
                                        <>
                                            {file.type.startsWith("image/") && (
                                                <img src={previewURL} alt="File Preview" className="max-h-40 object-cover rounded-lg" />
                                            )}
                                            {file.type.startsWith("video/") && (
                                                <video controls src={previewURL} className="max-h-40 rounded-lg" />
                                            )}
                                            {file.type.startsWith("audio/") && (
                                                <audio controls src={previewURL} className="w-full" />
                                            )}
                                        </>
                                    ) : ( 
                                        <>
                                            {currentPost?.image && (
                                                <img src={currentPost.image} alt="Current Post Image" className="max-h-40 object-cover rounded-lg" />
                                            )}
                                            {currentPost?.video && (
                                                <video controls src={currentPost.video} className="max-h-40 rounded-lg" />
                                            )}
                                            {currentPost?.audio && (
                                                <audio controls src={currentPost.audio} className="w-full" />
                                            )}
                                        </>
                                    )}
                                    <button
                                        onClick={removeFile}
                                        className="absolute top-2 right-2 bg-gray-500 text-white rounded-full p-1 hover:bg-gray-600"
                                    >
                                        <HiXMark className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                            <div className="flex space-x-4 mt-4">
                                <button onClick={() => openFileSelector("audio")} className="p-2 rounded-full hover:bg-gray-200 transition duration-200">
                                    <HiMicrophone className="h-5 w-5 lg:h-6 lg:w-6 text-[#063861]" />
                                </button>
                                <button onClick={() => openFileSelector("video")} className="p-2 rounded-full hover:bg-gray-200 transition duration-200">
                                    <HiMiniVideoCamera className="h-5 w-5 lg:h-6 lg:w-6 text-[#063861]" />
                                </button>
                                <button onClick={() => openFileSelector("image")} className="p-2 rounded-full hover:bg-gray-200 transition duration-200">
                                    <FaRegImage className="h-5 w-5 lg:h-6 lg:w-6 text-[#063861]" />
                                </button>
                            </div>

                            <button
                                className="text-xs lg:text-lg w-full border-2 border-[#F26531] bg-[#F26531] hover:bg-[#D1542E] text-white px-6 py-2 rounded-md transition duration-200"
                                onClick={handleUploadEdit}
                                disabled={!(inputText.trim() || file)}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </ImageCardContent>
            </Dialog>
        </div>
    );
};

export default MyProfile;
