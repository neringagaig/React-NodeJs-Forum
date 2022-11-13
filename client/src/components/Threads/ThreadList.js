import React from "react";
import { Link } from "react-router-dom";
import Like from "../Likes";
import Date from "../Thread/Date";
import "./threads.css";
const ThreadList = ({ thread }) => {
  return (
    <div className="thread-list">
      <div className="with-like">
        <Link to={`/${thread.category}/thread/${thread.id}`}>
          <span>{thread.title}</span>
        </Link>
        <Like />
      </div>

      <Link to={`/user/${thread.user.username}`}>
        <span className="thread-list-username">{thread.user.username}</span>
      </Link>
      <Date date={thread.date} />
    </div>
  );
};
export default ThreadList;
