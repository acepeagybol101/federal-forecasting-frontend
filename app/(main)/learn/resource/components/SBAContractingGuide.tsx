import {
  HiOutlineSpeakerWave,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiUserCircle,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { Card, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
interface Comment {
    id: number;
    userName: string;
    comment: string;
    post_id: number;
    userID:number;
}

const cardData = [
  { title: "Resource 1", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
  { title: "Resource 2", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
  { title: "Resource 3", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
  { title: "Resource 4", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
  { title: "Resource 5", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
  { title: "Resource 6", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
  { title: "Resource 7", description: "Evaluate your small business to see if it has what it takes to win a government contract." },
];

const SBAContractingGuide = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    const fetchComments = async () => {
        try {
            const response = await fetch('/api/posts/article-comments');
            const data = await response.json();
            console.log("comments:", data);
            if (response.ok) {
                setComments(data.comments);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };


  return (
      <div className="bg-white rounded-3xl">
          <div className="hidden sm:flex items-center border-b p-8">
              <h2 className="text-4xl font-medium">SBA CONTRACTING GUIDE</h2>
              <div className="ml-auto text-primary flex items-center space-x-2">
                  <HiOutlineSpeakerWave className="w-9 h-auto" />
                  <HiOutlineShare className="w-9 h-auto" />
                  <HiOutlineBookmark className="w-9 h-auto" />
              </div>
          </div>
          <div className="pt-1 sm:pt-5 px-5">
          <div className="flex items-center p-1 py-5 lg:py-10 justify-between">
        <h3 className="text-start lg:text-center text-secondary text-sm sm:text-6xl font-semibold pb-2 mr-2 flex-1">
            Contracting Guide
        </h3>

        <div className="flex space-x-1 sm:hidden">
            <HiOutlineSpeakerWave className="text-primary w-6 h-auto" />
            <HiOutlineShare className="text-primary w-6 h-auto" />
            <HiOutlineBookmark className="text-primary w-6 h-auto" />
        </div>
        </div>
              <p className="text-xs sm:text-2xl pl-4 lg:p-0">
                  The federal government contracts with small businesses to buy products and services.
              </p>

              <h5 className="text-xs sm:text-[42px] text-secondary pt-8 lg:pt-20 pb-5 lg:pb-9">
                  Benefits of government contracting
              </h5>
              <p className="text-xs sm:text-xl pl-4 lg:p-0">
                  Government contracts are a tremendous financial opportunity for small businesses.
              </p>
              <br />
              <p className="text-xs sm:text-xl pl-4 lg:p-0">
                  The U.S. government is the largest customer in the world. It buys all types of products and services — in both large and small quantities — and it&apos;s required by law to consider buying from small businesses.
              </p>
              <br />
              <p className="text-xs sm:text-xl pl-4 lg:p-0">
                  The government wants to buy from small businesses for several reasons, including:
              </p>
              <br />
              <ul className="text-xs sm:text-xl list-disc pl-10">
                  <li>To ensure that large businesses don&apos;t “muscle out” small businesses</li>
                  <li>To gain access to the new ideas that small businesses provide</li>
                  <li>To support small businesses as engines of economic development and job creation</li>
                  <li>To offer opportunities to disadvantaged socio-economic groups</li>
              </ul>

              <h5 className="text-secondary text-xs sm:text-[42px] pt-8 lg:pt-10 pb-5">
                  How it works
              </h5>
              <p className="text-xs sm:text-xl pl-4 lg:p-0">
                  The process of requesting proposals, evaluating bids, and awarding contracts should take place on a level playing field. The government should consider a bid from any qualified business.
              </p>

              <h5 className="text-xs sm:text-4xl text-secondary pt-7 pb-5 lg:pt-12 lg:pb-9">
                  Set-aside and sole contracts
              </h5>
              <p className="text-xs sm:text-xl pl-4 lg:p-0">
                  Federal agencies must publicly list their contract opportunities. Some of these contracts are set aside exclusively for small businesses.
                  <br />
                  <br /> In some cases, these so-called set-aside contracts might consist of certain types of tasks on larger contracts. In others, entire contracts may be reserved for small businesses. When a contract is set aside for one specific small business, it&apos;s called a sole-source contract.
              </p>

              <h5 className="text-xs sm:text-[42px] text-secondary pt-7 pb-5 lg:pt-12 lg:pb-9">
                  SBA&apos;s role in contracting
              </h5>
              <p className="text-xs sm:text-xl pl-4 lg:p-0">
                  SBA works with federal agencies in order to award 23 percent of prime government contract dollars to eligible small businesses. It also offers counseling and help to small business contractors.
              </p>

              <h5 className="pt-7 pb-5 lg:pb-0 lg:pt-24 text-secondary text-xs sm:text-[42px]">Get Started</h5>

              <div className="bg-white rounded-3xl">
                    {/* Grid for medium and large screens */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                        {cardData.map((card, index) => (
                        <Card key={index} className="shadow-lg">
                            <CardContent>
                            <p className="text-base mt-4">{card.description}</p>
                            </CardContent>
                            <CardFooter>
                            <Button variant="secondary" className="text-white w-full">
                                Learn More
                            </Button>
                            </CardFooter>
                        </Card>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <Carousel>
                        <CarouselContent>
                            {cardData.map((card, index) => {
                            if (index % 2 === 0) {
                                return (
                                <CarouselItem key={index}>
                                    <div className="grid grid-cols-2 gap-4 mr-4">
                                    <Card className="shadow-lg">
                                        <CardContent className="p-3 lg:p-6">
                                        <p className="text-xs lg:text-base lg:mt-4">{cardData[index].description}</p>
                                        </CardContent>
                                        <CardFooter className="p-3 lg:p-6">
                                            <Button variant="secondary" className="text-xs lg:text-base text-white w-full">
                                                Learn More
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                    {cardData[index + 1] && (
                                        <Card className="shadow-lg">
                                        <CardContent className="p-3 lg:p-6">
                                            <p className="text-xs lg:text-base lg:mt-4">{cardData[index + 1].description}</p>
                                        </CardContent>
                                        <CardFooter className="p-3 lg:p-6">
                                            <Button variant="secondary" className="text-xs lg:text-base text-white w-full">
                                            Learn More
                                            </Button>
                                        </CardFooter>
                                        </Card>
                                    )}
                                    </div>
                                </CarouselItem>
                                );
                            }
                            })}
                        </CarouselContent>
                        <CarouselDots />
                        </Carousel>
                    </div>
                    </div>

              <h5 className="text-secondary pt-12 text-xs lg:text-[42px]">Need help?</h5>
              <p className="pt-9 text-xs lg:text-xl">
                  Get help with specific contracting assistance programs. For additional assistance, contact the Office of Government Contracting and Business Development.
                  <br />
                  <br /> Office of Government Contracting & Business Development
                  <br /> 409 3rd St. SW, Suite 8000
                  <br /> Washington, DC 20416
                  <br /> Email: contracting@sba.gov
              </p>

              <h5 className="pt-12 text-xs lg:text-3xl pb-3 lg:pb-1">Attachments</h5>
              <div className="border-y border-gray-300 pt-5 lg:pt-0 pb-5">
                  <div className="hidden lg:block text-2xl py-5">Videos</div>
                  <iframe
                      src="https://www.youtube.com/embed/Jpv2BHTc6eU"
                      title="How SBA Can Help You Start, Grow, Expand, or Recover Your Business"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full md:w-80 lg:w-80"
                  ></iframe>
              </div>

              <div className="text-xs lg:text-xl flex items-center space-x-9 py-6">
                  <HiOutlineHeart className="w-4 h-4 lg:w-6 lg:h-6 sm:w-12 sm:h-auto mr-1 sm:mr-5" /> 3 Likes
                  <div className="flex items-center">
                      <HiOutlineChatBubbleOvalLeftEllipsis className="sm:w-12 w-4 lg:w-6 h-auto" />
                      <div className="pl-1 sm:pl-5">0 Comments</div>
                  </div>
              </div>

              <div className="flex items-center pb-10 gap-3 lg:gap-5">
                  <HiUserCircle className="w-6 h-6 sm:w-14 sm:h-14 fill-white bg-secondary rounded-full overflow-visible" />
                  <Input
                      id="message"
                      name="message"
                      className="rounded-full font-medium pl-6 text-lg text-center sm:text-2xl h-7 lg:h-10 sm:h-16 appearance-none bg-gray-200"
                  />
                  <HiOutlinePaperAirplane className="w-7 h-7 lg:w-14 lg:h-14 -rotate-45 bg-primary rounded-full overflow-visible text-white p-1.5 lg:p-2.5" />
              </div>
          </div>
      </div>
  );
};

export default SBAContractingGuide;
