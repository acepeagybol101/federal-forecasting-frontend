import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  HiMagnifyingGlass,
  HiOutlineSpeakerWave,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiUserCircle,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

const Resource = () => {
  const dummyData = [
    "SBA Contracting Guide",
    "Contracting Assistance Program",
    "SBA Counseling and Help",
    "FPDS.gov",
    "SAM.gov",
    "Navigating the updated HUBZone Map",
    "Size Standards",
    "SCORE Business Mentoring",
    "Where to update your profile",
  ];

  return (
    <div className="px-14">
      <div className="flex items-center py-8">
        <div className="text-[55px] font-semibold text-secondary">
          RESOURCES
        </div>
        <div className="flex items-center text-2xl ml-auto">
          <div className="pr-2">Category</div>
          <Select>
            <SelectTrigger className=" rounded-full text-xl w-[300px] p-6 shadow-lg">
              <SelectValue placeholder="Select " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="pl-5 pr-2">Subcategory</div>
          <Select>
            <SelectTrigger className=" rounded-full text-xl w-[300px] p-6 shadow-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative pl-5">
            <Input
              className=" rounded-full text-xl w-[390px] h-12 shadow-lg"
              placeholder="Search here"
            />
            <div className=" absolute right-0 top-0 bottom-0 bg-primary rounded-r-full w-16 flex">
              <HiMagnifyingGlass className="m-auto h-auto w-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 pb-10">
        <div className=" col-span-4">
          <div className="bg-white rounded-3xl divide-y p-2 text-2xl">
            {dummyData.map((item) => (
              <div key={item} className="p-6">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-8">
          <div className="bg-white rounded-3xl">
            <div className="flex items-center border-b p-8">
              <div className="text-4xl font-medium">SBA CONTRACTING GUIDE</div>
              <div className="ml-auto text-primary  flex items-center space-x-2">
                <HiOutlineSpeakerWave className="w-9 h-auto" />
                <HiOutlineShare className="w-9 h-auto" />
                <HiOutlineBookmark className="w-9 h-auto" />
              </div>
            </div>
            <div className="pt-16 px-5">
              <div className="text-center text-secondary text-6xl font-semibold pb-2">
                Contracting Guide
              </div>
              <p className="text-2xl text-center">
                The federal government contracts with small businesses to buy
                products and services.
              </p>

              <div className="text-5xl text-secondary pt-20 pb-9">
                Benefits of government contracting
              </div>
              <p className="text-xl">
                Government contracts are a tremendous financial opportunity for
                small businesses.
              </p>
              <br></br>
              <p className="text-xl">
                The U.S. government is the largest customer in the world. It
                buys all types of products and services — in both large and
                small quantities — and it’s required by law to consider buying
                from small businesses.
              </p>
              <br></br>
              <p className="text-xl">
                The government wants to buy from small businesses for several
                reasons, including:
              </p>
              <br></br>
              <p className="text-xl">
                <li>
                  To ensure that large businesses don’t “muscle out” small
                  businesses
                </li>
                <li>
                  To gain access to the new ideas that small businesses provide
                </li>
                <li>
                  To support small businesses as engines of economic development
                  and job creation
                </li>
                <li>
                  To offer opportunities to disadvantaged socio-economic groups
                </li>
              </p>

              <div className="text-secondary text-5xl pt-10 pb-5">
                How it works
              </div>
              <p className="text-xl">
                The process of requesting proposals, evaluating bids, and
                awarding contracts should take place on a level playing field.
                The government should consider a bid from any qualified
                business.
              </p>

              <div className="text-4xl text-secondary pt-12">
                Set-aside and sole contracts
              </div>
              <p className="pt-9 text-xl">
                Federal agencies must publicly list their contract
                opportunities. Some of these contracts are set aside exclusively
                for small businesses.
                <br />
                <br /> In some cases, these so-called set-aside contracts might
                consist of certain types of tasks on larger contracts. In
                others, entire contracts may be reserved for small businesses.
                When a contract is set-aside for one specific small business,
                it&apos;s called a sole-source contract.
              </p>

              <div className="text-5xl text-secondary pt-12">
                SBA&apos;s role in contracting
              </div>
              <p className="pt-9 text-xl">
                SBA works with federal agencies in order to award 23 percent of
                prime government contract dollars to eligible small businesses.
                It also offers counseling and help to small business
                contractors.
              </p>

              <div className="pt-28 text-secondary text-5xl">Get Started</div>
              <div className="text-secondary pt-12 text-5xl">Need help?</div>
              <p className="pt-9 text-xl">
                Get help with specific contracting assistance programs. For
                additional assistance, contact the Office of Government
                Contracting and Business Development. <br />
                <br /> Office of Government Contracting & Business
                Development409 3rd St. SW, Suite 8000Washington, DC 20416Email:
                contracting@sba.gov
              </p>

              <div className="pt-12 text-3xl  pb-1">Attachments</div>
              <div className="border-y border-gray-300 pb-5">
                <div className="text-2xl py-5">Videos</div>
                <div className="w-[350px] h-[154px] bg-gray-400"></div>
              </div>
              <div className="text-xl flex items-center space-x-9 py-6">
                <HiOutlineHeart className="w-12 h-auto mr-5" /> 3 Likes
                <div className="flex items-center">
                  <HiOutlineChatBubbleOvalLeftEllipsis className="w-12 h-auto" />
                  <div className="pl-5">0 Comments</div>
                </div>
              </div>

              <div className="flex items-center pb-10">
                <HiUserCircle className="w-14 h-14 fill-white bg-secondary rounded-full mr-5 overflow-visible" />

                <Input
                  id="message"
                  name="message"
                  placeholder="Add a chat"
                  className=" rounded-full font-medium pl-6 text-2xl h-16 appearance-none bg-gray-200"
                />
                <HiOutlinePaperAirplane className="w-14 h-14 -rotate-45 bg-primary rounded-full overflow-visible text-white p-2.5 ml-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
