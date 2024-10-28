import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardFooter, CardHeader } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';

const FriendRequestCard = () => {
  const [users, setUsers] = useState<{
    id: number;
    name: string;
    email: string;
  }[]>([]);
  
  // State to track disabled status of buttons
  const [disabledUsers, setDisabledUsers] = useState<number[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/friend-request');
      const data = await response.json();
      setUsers(data.users);
    };

    fetchUsers();
  }, []);

  const handleAccept = async (receiverId: number) => {
    setDisabledUsers(prev => [...prev, receiverId]); // Disable button immediately
    try {
      const response = await fetch('/api/friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiverId }),
      });

      const data = await response.json();
      console.log(data.message);
      // Optionally refresh the user list or update the state
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };

  const handleRemove = async (receiverId: number) => {
    setDisabledUsers(prev => [...prev, receiverId]); // Disable button immediately
    try {
      const response = await fetch('/api/friend-request/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiverId }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error removing friend request:', error);
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
                className="rounded-full px-2 py-1 sm:px-6 sm:py-2 mr-2"
                variant="success"
                onClick={() => handleAccept(user.id)} // Pass the user ID
                disabled={disabledUsers.includes(user.id)} // Disable button if in disabledUsers
              >
                Accept
              </Button>
              <Button
                className="rounded-full px-2 py-1 sm:px-6 sm:py-2"
                variant="danger"
                onClick={() => handleRemove(user.id)} // Pass the user ID
                disabled={disabledUsers.includes(user.id)} // Disable button if in disabledUsers
              >
                Remove
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FriendRequestCard;
