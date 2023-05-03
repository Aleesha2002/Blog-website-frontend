import React from "react";
import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitles">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://img.freepik.com/free-photo/busy-freelancer-rewrites-infrormation-into-notepad_176532-7083.jpg"
          alt=" "
        />
        <p className="sidebarPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitles">CATEGORIES </span>
        <ul className="sidebarList">
          <li className="sidebarListItems">Life</li>
          <li className="sidebarListItems">Music</li>
          <li className="sidebarListItems">Style</li>
          <li className="sidebarListItems">Sports</li>
          <li className="sidebarListItems">Tech</li>
          <li className="sidebarListItems">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitles">FOLLOW US</span>
        <div className="sidebarSocials">
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon margin1 fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon margin1 fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon margin1 fa-brands fa-square-facebook"></i>
        </div>
      </div>
    </div>
  );
}
