import React from 'react'

const User = ({user, deleteUser}) => {

    const USER_API_BASE_URL = `http://localhost:8080/api/users/${user.id}`;

    const handleDelete = async (e) => {
        e.preventDefault();
        
        const response = await fetch(USER_API_BASE_URL, {
            method: "DELETE",
        });

        if (response.ok) {
            // 2. Call the parent function to update the UI instantly
            deleteUser(e, user.id);
        } else {
            console.error("Failed to delete user from database");
        }
    };


  return (
      <tr key={user.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{user.firstName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{user.lastName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{user.emailId}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap'>
            <a href='#' className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4'>Edit</a>
            <a href='#' className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer' onClick={handleDelete}>Delete</a>
        </td>
    </tr>
  )
}

export default User
