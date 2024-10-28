"use client";

import { Input } from "@/components/ui/input";
import { FaRegImage } from "react-icons/fa";
import { HiMicrophone, HiMiniVideoCamera, HiUserCircle, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { Dialog, ImageCardContent } from "@/components/ui/dialog";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase";

interface PostData {
  title?: string;
  fileURL?: string;
}

const PostInput = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const openCard = () => {
    setIsCardOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleUpload = async () => {
    const postData: PostData = {};

    if (inputText.trim()) {
      postData.title = inputText;
    }

    try {

      if (file) {
        const randomString = Math.random().toString(36).substring(2, 15);
        const uniqueFileName = `${randomString}-${file.name}`;
        const storageRef = ref(storage, `file/${uniqueFileName}`);
        await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(storageRef);
        postData.fileURL = fileURL;
      }
      console.log("Post Data:", postData);
      if (postData.title || postData.fileURL) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          window.location.reload();
        } else {
          console.error('Error uploading post:', response.statusText);
        }
      } else {
        console.log("No input to submit.");
      }
    } catch (error) {
      console.error('Error uploading post:', error);
    }
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

  const openFileSelector = (type: "audio" | "video" | "image") => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = type === "audio" ? "audio/*" : type === "video" ? "video/*" : "image/*";
    input.onchange = handleFileChange;
    input.click();
  };

  const removeFile = () => {
    setFile(null);
    setPreviewURL(null);
  };


  return (
    <div className="bg-white rounded-3xl shadow-sm lg:shadow-lg w-full p-3 lg:p-7 border">
      <div className="flex items-center lg:pr-4 border-b border-gray-400 pb-2 lg:pb-6 gap-2 lg:gap-4">
        <HiUserCircle className="h-auto w-10 lg:w-12 rounded-full text-secondary" />
        <Input
          id="mind"
          name="mind"
          placeholder="What’s on your mind?"
          className="rounded-full text-xs lg:text-lg appearance-none w-full h-10 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#e9e9e9]"
          onClick={openCard}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 justify-center pt-5 sm:grid-cols-3 md:grid-cols-3">
        <div className="flex items-center justify-center cursor-pointer" onClick={openCard}>
          <FaRegImage className="h-auto w-5 lg:w-8 text-primary" />
          <span className="text-xs lg:text-lg font-medium pl-2">Image</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer" onClick={openCard}>
          <HiMiniVideoCamera className="h-auto w-5 lg:w-8 text-primary" />
          <span className="text-xs lg:text-lg font-medium pl-2">Video</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer" onClick={openCard}>
          <HiMicrophone className="h-auto w-5 lg:w-8 text-primary" />
          <span className="text-xs lg:text-lg font-medium pl-2">Audio</span>
        </div>
      </div>

      <Dialog open={isCardOpen} onOpenChange={setIsCardOpen}>
        <ImageCardContent className="w-full max-w-xs p-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h2 className="text-base lg:text-2xl font-semibold text-gray-800">Input Your Text</h2>
            <div className="border-2 border-[#063861] p-4 rounded-lg w-full flex flex-col items-center space-y-4">
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type something..."
                className="p-2 text-xs lg:text-lg border border-gray-300 rounded-lg w-full pt-4 pb-2 h-40 focus:outline-none focus:ring-2 focus:ring-[#063861] transition duration-200 resize-none"
                rows={4}
              />

              {file && previewURL && (
                <div className="w-full mt-4 flex flex-col items-center relative">
                  {file.type.startsWith("image/") && (
                    <img src={previewURL} alt="Image Preview" className="max-h-40 object-cover rounded-lg" />
                  )}
                  {file.type.startsWith("video/") && (
                    <video controls src={previewURL} className="max-h-40 rounded-lg" />
                  )}
                  {file.type.startsWith("audio/") && (
                    <audio controls src={previewURL} className="w-full" />
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
                onClick={handleUpload}
                disabled={!(inputText.trim() || file)}
              >
                Submit
              </button>
            </div>
          </div>
        </ImageCardContent>
      </Dialog>
    </div>
  );
};

export default PostInput;
