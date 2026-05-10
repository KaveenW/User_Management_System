"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import UserList from "../../components/UserList"
import AddUser from "../../components/AddUser";
import { useEffect, useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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


    return (
        <div>
            <Navbar />
            <main>
                {/* We pass fetchData so AddUser can tell the page to refresh */}
                <AddUser updateList={fetchData} />
                
                {/* We pass users and setUsers so UserList can display and delete */}
                <UserList users={users} setUsers={setUsers} loading={loading} />
            </main>
        </div>
    );
}
