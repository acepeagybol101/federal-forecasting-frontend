import { HiBars3, HiChevronDown } from "react-icons/hi2";
import group1 from '../../../../public/images/group1.png';
import Image from "next/image"; 



const GroupsList = () => {
    return (
        <div className="mt-5">
            <div className="flex border-b border-gray-400 mb-4">
                <h3 className="pb-2">Groups</h3>
                <HiBars3 className="ml-auto w-7 h-7" />
            </div>
            <div className="flex justify-center mt-6">
                    <HiChevronDown className="w-7 h-7 text-gray-500 cursor-pointer" />
                </div>
        </div>
    );
};

export default GroupsList;
