import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const SuggestionFriends = () => {
    const [users, setUsers] = useState<{
        id: number;
        name: string;
        email: string;
    }[]>([]);
    const [requestSent, setRequestSent] = useState<{ [key: number]: boolean }>({}); 

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/suggestion'); 
            const data = await response.json(); 
            setUsers(data.users); 
        };

        fetchUsers();
    }, []); 

    const handleAddFriend = async (receiverId: number) => {
        try {
            const response = await fetch('/api/suggestion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ receiverId }),
            });
            const data = await response.json();
            console.log(data.message); 
            setRequestSent(prev => ({ ...prev, [receiverId]: true }));
        } catch (error) {
            console.error("Error sending friend request:", error);
        }
    };

    return (
        <div>
            {users.map(user => (
                <Card key={user.id} className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-4 flex items-center mb-4">
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full sm:rounded-none overflow-hidden bg-gray-300"></div>
                    
                    <div className="ml-6 flex-1">
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl font-semibold">{user.name}</CardTitle>
                        </CardHeader>

                        <CardFooter className="p-0 mt-4">
                            <Button 
                                className="rounded-full px-6 py-2" 
                                variant={requestSent[user.id] ? "default" : "success"} 
                                onClick={() => handleAddFriend(user.id)} 
                                disabled={requestSent[user.id]} 
                            >
                                {requestSent[user.id] ? "Request Sent" : "Add Friend"}
                            </Button>
                        </CardFooter>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default SuggestionFriends;
