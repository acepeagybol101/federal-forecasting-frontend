"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTitleDescription, DialogText, DialogFooter, DialogTitleFooter } from '@/components/ui/dialog';
import { useState } from 'react';

const CommunityGuidelinesDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);

    return (
        <div>
            <div className="text-xl lg:pt-8 lg:pb-4 ">
                <p
                    className="text-xs lg:text-xl cursor-pointer hover:text-orange-500"
                    onClick={openDialog}
                >
                    Community Guidelines
                </p>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent
                    onInteractOutside={(e) => e.preventDefault()}
                    className="sm:max-h-none sm:overflow-visible max-h-[80vh] overflow-y-auto"
                >
                    <DialogHeader>
                        <div className="border-b border-gray-300 pb-2">
                            <DialogTitle>
                                <h2 className='text-base lg:text-2xl text-left'>COMMUNITY GUIDELINES</h2>
                            </DialogTitle>
                        </div>
                    </DialogHeader>
                    <DialogDescription>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                            <div className='col-span-1'>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>1. Be Respectful</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Treat everyone with respect and kindness. <br />
                                        • No personal attacks, harassment, or hate speech.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>2. Stay Relevant</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Keep posts related to the group’s focus. <br />
                                        • No spam or irrelevant content.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>3. No Self-Promotion</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • No unsolicited ads or self-promotion. <br />
                                        • Get admin approval for any promotions.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>4. Protect Privacy</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Don’t share personal information. <br />
                                        • Respect the confidentiality of discussions.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>5. Follow Platform Rules</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Adhere to the social media platform’s rules. <br />
                                        • Report violations to admins.
                                    </DialogText>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>6. Be Supportive</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Help and support fellow members. <br />
                                        • Share useful knowledge and resources.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>7. No Plagiarism</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Share original content or credit the source. <br />
                                        • Don’t post copyrighted material without permission.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>8. Use Appropriate Language</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Avoid offensive or inappropriate language. <br />
                                        • Keep discussions professional.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>9. Respect Admins</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Follow admin guidance and decisions. <br />
                                        • Address concerns respectfully with admins.
                                    </DialogText>
                                </div>
                                <div>
                                    <DialogTitleDescription className='text-sm lg:text-xl'>10. Engage Positively</DialogTitleDescription>
                                    <DialogText className="text-xs lg:text-sm">
                                        • Participate actively and enjoy the community. <br />
                                        • Make meaningful connections.
                                    </DialogText>
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                    <DialogFooter>
                        <DialogTitleFooter className="text-xs lg:text-lg">Violating these guidelines may result in removal from the group</DialogTitleFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CommunityGuidelinesDialog;
