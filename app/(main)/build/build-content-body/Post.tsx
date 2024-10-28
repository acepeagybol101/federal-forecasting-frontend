"use client";

import { HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineHeart, HiUserCircle,  HiOutlinePaperAirplane,  } from "react-icons/hi2";
import {  HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Loading from "@/components/ui/loading";
import * as React from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";

interface Comment {
    id: number;
    userName: string;
    comment: string;
    post_id: number;
    userID:number;
}

interface Likes {
    post_id: number;
    user_id: number | null;
}

interface UploadedData {
    id: number;
    userId: number;
    title: string;
    userName: string;
    image: string | null;
    audio: string | null;
    video: string | null;
    created_at: string;
}

const Post = () => {
    const [isLiked, setIsLiked] = useState<boolean[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState<{ [key: number]: boolean }>({});
    const [commentText, setCommentText] = useState<string>("");
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [uploadedData, setUploadedData] = useState<UploadedData[] | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [likes, setLikes] = useState<Likes[]>([]);
    const [loading, setLoading] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
    const { data: session } = useSession();
    const userId = session?.user?.id ? Number(session.user.id) : null;
    const [editCommentId, setEditCommentId] = useState<number | null>(null);
    const [editedCommentText, setEditedCommentText] = useState<string>("");

    //FETCH DATA
    const fetchPostData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/get', { method: 'GET' });
            const data = await response.json();
            console.log("Post:", data);
            setUploadedData(data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await fetch('/api/posts/comments');
            const data = await response.json();
            console.log("comments:", data);
            if (response.ok) {
                setComments(data.comments);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const fetchLikes = async () => {
        const response = await fetch('/api/posts/likes');
        const data = await response.json();
        if (response.ok) {
            setLikes(data.likes);
        }
        console.log("likes:", data);
    };
    
    

    useEffect(() => {
        fetchPostData();
        fetchComments();
        fetchLikes();
    }, []);

    //LIKES
    const handleLike = async (postId: number) => {
        const updatedLikes = [...isLiked];
        const isCurrentlyLiked = updatedLikes[postId];
        updatedLikes[postId] = !isCurrentlyLiked;
        setIsLiked(updatedLikes);
        const currentLikesCount = likes.filter(l => l.post_id === postId).length;
        const newLikesCount = isCurrentlyLiked ? currentLikesCount - 1 : currentLikesCount + 1;
        setLikes(prevLikes => {
            const newLikes = prevLikes.filter(like => like.post_id !== postId);
            if (!isCurrentlyLiked) {
                newLikes.push({ post_id: postId, user_id: userId });
            }
            return newLikes;
        });
    
        try {
            const response = await fetch(`/api/posts/likes`, {
                method: isCurrentlyLiked ? 'DELETE' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId }),
            });
    
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error liking/unliking post:', error);
            updatedLikes[postId] = isCurrentlyLiked; 
            setIsLiked(updatedLikes);
            setLikes(prevLikes => {
                const newLikes = prevLikes.filter(like => like.post_id !== postId);
                return newLikes;
            });
        }
    };

    //COMMENTS
    const handleCommentSubmit = async (postId: number) => {
        if (!commentText) return;

        try {
            const response = await fetch('/api/posts/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, comment: commentText }),
            });

            const data = await response.json();
            if (response.ok) {
                setCommentText("");
                setIsDialogOpen((prev) => ({ ...prev, [postId]: false }));
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleEdit = (commentId: number, currentCommentText: string) => {
        setActiveDropdown(null);
        setEditCommentId(commentId); 
        setEditedCommentText(currentCommentText);  
    };

    const handleUpdateComment = async (commentId: number) => {
        try {
            const response = await fetch('/api/posts/comments', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ commentId, comment: editedCommentText }),
            });
    
            const data = await response.json();
            if (response.ok) {
                setEditCommentId(null); 
                setComments((prevComments) =>
                    prevComments.map((comment) =>
                        comment.id === commentId ? { ...comment, comment: editedCommentText } : comment
                    )
                );
                setActiveDropdown(null);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error updating comment:', error);
        }
    };
    
    const handleDelete = async (commentId: number) => {
        try {
            const response = await fetch('/api/posts/comments', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ commentId }),
            });
    
            const data = await response.json();
            window.location.reload();
            if (!response.ok) {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleDropdown = (commentId: number) => {
        setActiveDropdown((prev) => (prev === commentId ? null : commentId)); 
    };

    const handleOpenDialog = (postId: number) => {
        setIsDialogOpen((prev) => ({ ...prev, [postId]: true }));
    };

    const handleImageClick = (imageUrl: string | null) => {
        if (imageUrl) {
            setFullScreenImage(imageUrl);
        }
    };

    const closeFullScreenImage = () => {
        setFullScreenImage(null);
    };

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            console.error('Invalid date:', timestamp);
            return '';
        }

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                uploadedData &&
                uploadedData.map((post) => (
                    <div key={post.id} className="bg-white rounded-[20px] lg:rounded-3xl shadow-sm lg:shadow-lg w-full p-3 lg:p-7 mt-4 border mx-auto">
                        <div className="flex items-start">
                            <div className="h-fit w-14 lg:h-14 flex items-center justify-center">
                                <HiUserCircle className="w-10 h-10 lg:w-full lg:h-full text-secondary" />
                            </div>
                            <div className="pl-2 lg:pl-5">
                                <span className="text-xs lg:text-xl">{post.userName}</span>
                                <span className="text-[10px] lg:text-sm block text-gray-500">{formatDate(post.created_at)}</span>
                            </div>
                        </div>
                        <div className="hover:text-blue-500">
                            <p className="text-xs lg:text-lg p-4">{post.title}</p>
                            {post.image && (
                                <img
                                    src={post.image}
                                    className="max-h-full w-full object-cover rounded-lg mb-2 cursor-pointer"
                                    onClick={() => handleImageClick(post.image)} 
                                    alt={post.title}
                                />
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
                        <div className="flex items-center">
                            <div className="flex items-center cursor-pointer" onClick={() => handleLike(post.id)}>
                                <HiOutlineHeart
                                className={`h-auto w-4 lg:w-8 ${isLiked[post.id] ? 'text-red-500' : 'text-black'}`}
                                />
                                  <span className="text-xs lg:text-[14px] text-gray-500 ml-2 mr-1">
                                  {likes.filter(l => l.post_id === post.id).length}
                                </span>
                                <span className="text-xs lg:text-[14px] text-gray-500 mr-4">Likes</span>
                            </div>
                            <div className="flex items-center cursor-pointer" onClick={() => handleOpenDialog(post.id)}>
                                <HiOutlineChatBubbleOvalLeftEllipsis
                                className="h-auto w-4 lg:w-8 cursor-pointer"
                                />
                                <span className="text-xs lg:text-[14px] text-gray-500 ml-2 mr-1">
                                    {comments.filter(c => c.post_id === post.id).length}
                                </span>
                                <span className="text-xs lg:text-[14px] text-gray-500">Comment</span>
                            </div>
                        </div>

                        <Dialog open={isDialogOpen[post.id]} onOpenChange={() => setIsDialogOpen((prev) => ({ ...prev, [post.id]: false }))}>
                            <DialogContent>
                                <div className="pb-20">
                                    <h3 className="text-lg font-semibold">Comments:</h3>
                                    {comments
                                        .filter((c) => c.post_id === post.id)
                                        .map((c) => (
                                            <div key={c.id} className="flex items-start mt-2 relative">
                                                <HiUserCircle className="w-8 h-8 text-secondary" />
                                                <div className="ml-2">
                                                    <span className="font-bold">{c.userName}</span>
                                                    {editCommentId === c.id ? (
                                                        <div className="flex items-center">
                                                            <input
                                                                value={editedCommentText}
                                                                onChange={(e) => setEditedCommentText(e.target.value)}
                                                                className="w-full h-10 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            />
                                                            <button
                                                                className="ml-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600"
                                                                onClick={() => handleUpdateComment(c.id)}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <p className="text-gray-600">{c.comment}</p>
                                                    )}
                                                </div>
                                                {c.userID === userId && (
                                                    <div className="relative ml-8">
                                                        <HiOutlineDotsHorizontal
                                                            className="absolute right-0 top-0 w-6 h-6 cursor-pointer text-gray-500"
                                                            onClick={() => toggleDropdown(c.id)}
                                                        />
                                                        {activeDropdown === c.id && (
                                                            <div className="absolute right-0 mt-6 w-32 bg-white border rounded-lg shadow-lg z-10">
                                                                <button
                                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                                    onClick={() => handleEdit(c.id, c.comment)}
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                                                                    onClick={() => handleDelete(c.id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                </div>
                                <div className="flex items-center mt-4">
                                <HiUserCircle className="w-12 h-12 mr-2 text-secondary" />
                                    <Input
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Add a comment"
                                    className="rounded-full font-medium pl-6 text-md text-start sm:text-xl h-7 lg:h-10 sm:h-16 appearance-none bg-gray-100"
                                    />
                                <button
                                    className="ml-2 bg-[#F26531] text-white px-3 py-2 rounded-full hover:bg-orange-600 flex items-center justify-center"
                                    onClick={() => handleCommentSubmit(post.id)}
                                >
                                    <HiOutlinePaperAirplane className="w-7 h-7 lg:w-7 lg:h-8 -rotate-45  text-white" />
                                </button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                ))
            )}

            {fullScreenImage && (
                <Dialog open={true} onOpenChange={closeFullScreenImage}>
                    <DialogContent className="flex justify-center items-center">
                        <img
                            src={fullScreenImage}
                            className="max-h-screen max-w-screen"
                            alt="Full screen"
                        />
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default Post;
