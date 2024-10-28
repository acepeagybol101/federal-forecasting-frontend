import React from 'react';
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import user3 from "@/public/images/userImg3.jpg";
import Image from 'next/image';

interface GroupCardProps {
    name: string;
    numOfMembers: number;
}

const Group: React.FC<GroupCardProps> = ({ name, numOfMembers }) => {
    return (
        <Card className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-3 lg:p-4 flex items-center">
        <div className="w-[57px] h-[54px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden">
          <Image
            src={user3}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
            <div className="ml-6 flex-1 flex flex-row justify-between lg:flex-col">
                <CardHeader className="p-0">
                    <CardTitle className="text-sm lg:text-xl font-semibold">{name}</CardTitle>
                </CardHeader>

                <CardFooter className="p-0 lg:mt-2 flex-col items-start">
                    <CardDescription className="text-xs lg:text-sm">{numOfMembers} Members</CardDescription>
                    <div className="text-xs lg:text-sm py-1 text-green-500">Joined</div>
                </CardFooter>
            </div>
        </Card>
    );
};

export default Group;
