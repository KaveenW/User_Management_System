"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import UserList from "../../components/UserList"
import AddUser from "../../components/AddUser";
import { useEffect, useState } from "react";
import EditUser from "../../components/EditUser";

export default function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editUserId, setEditUserId] = useState(null);

    // This function fetches the latest data from your Spring Boot backend
  const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/api/users/all");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    // Run fetch on initial load
    useEffect(() => {
        fetchData();
    }, []);

    const editUser = (e, id) =>{
        e.preventDefault();
        setEditUserId(id);
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="px-10 py-10">
                {/* We pass fetchData so AddUser can tell the page to refresh */}
                <AddUser updateList={fetchData} />
                
                {/* We pass users and setUsers so UserList can display and delete */}
                <UserList users={users} setUsers={setUsers} loading={loading} editUser={editUser}/>
                <EditUser 
                userId={editUserId} 
                setUserId={setEditUserId} 
                updateList={fetchData} 
            />
            </main>
        </div>
    );
}
