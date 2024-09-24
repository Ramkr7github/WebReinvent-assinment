import React, { useState, useEffect } from "react";
import UserCard from "./Usercard";
import Header from "./Header";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        console.log(data);
        setUsers(data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20">

      <h1 className="text-4xl font-bold mb-4">Welcome, To the DashBoard!</h1>
        
        <div className="flex flex-wrap gap-6 justify-center p-10">
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
