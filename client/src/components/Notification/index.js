import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  return <div className="notification">{notification ? <span>{notification}</span> : ""}</div>;
};

export default Notification;
