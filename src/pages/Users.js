import React, { useEffect } from "react";
import { UserItem } from "../components/UserItem";
import { Loader } from "../components/Loader";

export const Users = ({ users, fetchUsers, isLoading }) => {
  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, [users.length, fetchUsers]);
  return (
    <div className="container mt-4">
      <Loader isLoading={isLoading} />
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};
