"use client"
import React from 'react'
import { Dialog, Transition, DialogTitle } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from 'react'
const AddUser = () => {
    const USER_API_BASE_URL = "http://localhost:8080/api/users/user";
    const [isOpen, setIsOpen] = useState(false);

    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }

    const saveUser = async (e) => {
        e.preventDefault();

        const response = await fetch(USER_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const _user = await response.json();

        closeModal();
    }

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    // YOU WERE MISSING THIS RETURN STATEMENT!
    return (
        <>
            <div className='container mx-auto my-8'>
                <div className='h-12'>
                    {/* Added onClick here so the button actually does something! */}
                    <button 
                        onClick={openModal}
                        className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded'>
                        Add User
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* 1. The Backdrop (Darkens the background) */}
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {/* 2. The Centering Wrapper */}
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            Add New User
                        </Dialog.Title>
                        
                        {/* You can start putting your input fields here */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-500">
                                Please fill in the details below to register a new user.
                            </p>
                            <form className="mt-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text" 
                                        placeholder="Enter first name"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        type="text" 
                                        placeholder="Enter last name"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email" 
                                        placeholder="Enter email address"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                        name="emailId"
                                        value={user.emailId}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="flex items-center justify-start">
                                    <button
                                        type="button"
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"   
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={saveUser} // You can replace this with your actual save logic
                                        type="submit"
                                        className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Save User
                                    </button>
                                </div>
                            </form>
                        </div>

                        
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
    </Dialog>
</Transition>
        </>
    ); // Don't forget the closing parenthesis
}

export default AddUser
