import { HiUserCircle } from "react-icons/hi2";
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserInfo = () => {
    const {data: session, status } = useSession();

    return (
        <div className="flex items-center py-10">
            <HiUserCircle className="h-auto w-12 rounded-full text-secondary hidden md:block" />
            <div className="font-medium text-xl pl-3 hidden md:block">
            <Link href='/build/my-profile'>
                {session?.user?.name}
            </Link>
            </div>
        </div>
    );
};

export default UserInfo;
