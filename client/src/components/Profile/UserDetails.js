import React from "react";
import Avatar from "../Thread/Avatar";
import "./profile.css";

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>{user.username}</h2>
      {user.username && <p>Name: {user.username}</p>}
      <Avatar user={user} />
    </div>
  );
};
export default UserDetails;
