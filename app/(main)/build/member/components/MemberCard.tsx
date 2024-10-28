import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const MemberCard = () => {
  const [users, setUsers] = useState<{
    id: number;
    name: string;
    email: string;
  }[]>([]);

  // State to track disabled status of buttons
  const [disabledUsers, setDisabledUsers] = useState<number[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/friends');
      const data = await response.json();
      setUsers(data.users);
    };

    fetchUsers();
  }, []);

  const handleUnfriend = async (receiverId: number) => {
    setDisabledUsers(prev => [...prev, receiverId]); // Disable button immediately
    try {
      const response = await fetch('/api/friends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiverId }),
      });

      const data = await response.json();
      console.log(data.message);
      // Optionally refresh the user list or update the state here
    } catch (error) {
      console.error('Error removing friend request:', error);
    }
  };

  return (
    <div>
      {users?.map(user => (
        <Card key={user.id} className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-4 flex items-center mb-4">
          <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full sm:rounded-none overflow-hidden bg-gray-300"></div>
          <div className="ml-6 flex-1">
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold">{user.name}</CardTitle>
            </CardHeader>
            <CardFooter className="p-0 mt-4">
              <Button
                className="rounded-full px-6 py-2"
                variant="danger"
                onClick={() => handleUnfriend(user.id)} // Pass the user ID here
                disabled={disabledUsers.includes(user.id)} // Disable button if in disabledUsers
              >
                Unfriend
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MemberCard;
