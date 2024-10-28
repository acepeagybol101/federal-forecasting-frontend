import {
    HiOutlineSpeakerWave,
    HiOutlineShare,
    HiOutlineBookmark,
  } from "react-icons/hi2";

  

const UpdateProfile = () => {
  return (
    <div className="bg-white rounded-3xl">
      <div className="flex items-center border-b p-8">
        <div className="text-4xl font-medium">Where to update your profile</div>
        <div className="ml-auto text-primary flex items-center space-x-2">
          <HiOutlineSpeakerWave className="w-9 h-auto" />
          <HiOutlineShare className="w-9 h-auto" />
          <HiOutlineBookmark className="w-9 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
