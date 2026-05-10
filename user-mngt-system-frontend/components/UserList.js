"use client"
import {React, useEffect, useState } from 'react'
import User from "./User"



const UserList = ({ users, setUsers, loading, editUser }) => {

    // Simplifies this in UserList.js:
    const deleteUser = (e, id) => {
        // We don't need to fetch here because User.js already did it!
        // We just need to update the UI list.
        if (users) {
            setUsers((prevElement) => {
                return prevElement.filter((user) => user.id !== id);
            });
        }
    };

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
                {!loading &&(
                    <tbody className='bg-white'>
                        {users && users.map((user) => (
                            <User user={user} key={user.id} deleteUser={deleteUser} editUser={editUser} />
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default UserList
