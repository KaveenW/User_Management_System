"use client"
import {React, useEffect, useState } from 'react'
import User from "./User"



const UserList = () => {
    const USER_API_BASE_URL = "http://localhost:8080/api/users/all";
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const users = await response.json();
                setUsers(users);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }setLoading(false);
        };
        fetchData();
    }, []);

        // Inside your UserList component
    const deleteUser = (e, id) => {
        e.preventDefault();
        // Filter out the deleted user and update state
        setUsers((prevElement) => {
            return prevElement.filter((user) => user.id !== id);
        });
    };

    // When mapping:
    {users.map((user) => (
        <User user={user} deleteUser={deleteUser} key={user.id} />
    ))}

  return (
    <div className='container mx-auto my-8'>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>EmailId</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && users && (
                    <tbody className='bg-white'>
                        {users.map((user) => (
                            <User user={user} key={user.id}  />
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default UserList
