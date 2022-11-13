import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./likes.css";

const Like = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleClickLike = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }
    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  const handleClickDislike = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }
    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }
    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <div className="wrapper">
      <div className="btn-container">
        <FaThumbsUp
          onClick={handleClickLike}
          className={`thumbs-up ${activeBtn === "like" ? "like-active" : ""}`}
        />
        <span>{likeCount}</span>
      </div>
      <div className="btn-container">
        <FaThumbsDown
          onClick={handleClickDislike}
          className={`thumbs-down ${activeBtn === "dislike" ? "dislike-active" : ""}`}
        />
        <span>{dislikeCount}</span>
      </div>
    </div>
  );
};

export default Like;
