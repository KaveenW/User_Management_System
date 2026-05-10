"use client"
import { useState, useEffect } from 'react'
import React from 'react'

const EditUser = ({userId, setUserId, updateList}) => {

    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            if(!userId) return;
            try{
                const reponse = await fetch(`http://localhost:8080/api/users/${userId}`);
                const data = await reponse.json();
                setUser(data);
            } catch (error) {
                console.log(error);
        }
        };
        fetchUser();
    }, [userId]);

    const updateUser = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if(response.ok) {
            updateList();
            setUserId(null);
        }
    };

    if(!userId) return null; // Don't show the form if no user is selected for editing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md transform transition-all">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Update User Details
        </h3>
        
        <form className="space-y-4">
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Email Address</label>
                <input
                    type="email"
                    name="emailId"
                    value={user.emailId}
                    onChange={(e) => setUser({ ...user, emailId: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="flex items-center justify-start space-x-2 pt-4">
                <button
                    type="button"
                    onClick={() => setUserId(null)} // Closes the modal
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={updateUser}
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                >
                    Update User
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default EditUser
