import React from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function single() {
  return (
    <div className="Single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
