import Link from 'next/link';
import { FaChartSimple } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge"

const QuickLinksContainer = () => {
    return (
        <div className="hidden md:block"> 
            <h3 className="border-b border-gray-400 pb-2 mb-3">Quick Links</h3>
            <div className="flex items-center text-xl py-4 group">
                <HiMiniUserGroup className="h-auto w-8 text-secondary group-hover:text-orange-500" />
                <Link href="/build/member">
                    <span className="pl-2 cursor-pointer group-hover:text-orange-500">Members</span>
                </Link>
            </div>
            <div className="flex items-center text-xl py-4 group">
                <FaChartSimple className="h-auto w-8 text-secondary group-hover:text-orange-500" />
                <span className="pl-2 cursor-pointer group-hover:text-orange-500">Leaderboards <Badge variant="secondary" className='text-white'>Soon</Badge></span>
            </div>
            <div className="flex items-center text-xl py-4 group">
                <HiMiniUserGroup className="h-auto w-8 text-secondary group-hover:text-orange-500" />
                <span className="pl-2 cursor-pointer group-hover:text-orange-500">Badges <Badge variant="secondary" className='text-white'>Soon</Badge></span>
            </div>
        </div>
    );
};

export default QuickLinksContainer;
