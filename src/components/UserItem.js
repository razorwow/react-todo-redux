import React from "react";
import { NavLink } from "react-router-dom";

export const UserItem = ({ user }) => {
  return (
    <NavLink
      className="list-group-item list-group-item-action"
      to={"/user/" + user.id}
    >
      {user.name}
    </NavLink>
  );
};
