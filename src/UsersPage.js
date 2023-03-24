import React, { useEffect, useState } from "react";
import UserProfileCard from "./UserProfileCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const [userId, setUserId] = useState(null);

  const fetchUsers = async (user) => {
    const data = await fetch(
      `https://api.github.com/users${user ? `/${user}` : ""}`
    );
    const usersData = await data.json();

    if (usersData.length > 1) {
      setUsers([...users, ...usersData]);
    } else {
      console.log(usersData);
      setUsers([usersData]);
    }
  };

  useEffect(() => {
    fetchUsers(userId);
  }, [userId]);

  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <UserProfileCard
              key={user.id}
              id={user.id}
              avatar={user.avatar_url}
              login={user.login}
              email={user.html_url}
              setUserId={setUserId}
            />
          );
        })}
    </div>
  );
};

export default UsersPage;
