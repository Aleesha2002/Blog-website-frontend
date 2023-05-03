import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/sidebar";

export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">profilePicture</label>
          <div className="settingsProfilePic">
            <img
              src="https://us.123rf.com/450wm/tomertu/tomertu1711/tomertu171100465/89971836-image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?ver=6"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePicIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput style={{display:none}}" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" />
          <label>Email-id</label>
          <input type="email" placeholder="xyz@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
