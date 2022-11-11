import React from "react";

import { Link } from "react-router-dom";
import LoggedInUser from "./LoggedInUser";
import { FaComment } from "react-icons/fa";

const Header = ({ users, user, handleLogout, setFilter }) => {
  return (
    <div className={user && user.username === "admin" ? "header admin" : "header"}>
      <h1>
        <Link to="/" onClick={() => setFilter(null)}>
          Discussion Forum <FaComment />
        </Link>
      </h1>
      {user ? (
        <LoggedInUser users={users} user={user} handleLogout={handleLogout} />
      ) : (
        <p>
          Please <Link to="/login">login</Link> or <Link to="/register">register</Link> to join
          discussion
        </p>
      )}
    </div>
  );
};
export default Header;
