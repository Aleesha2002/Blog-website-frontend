import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem"> */}
          {/* <Link to="/posts" className="link">
              POSTS
            </Link>
          </li> */}
          <li className="topListItem">
            <Link to="/settings" className="link">
              SETTINGS
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          {/* <li className="topListItem">{user && "LOGOUT"}</li> */}
          <li className="topListItem">
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            className="topImg"
            src="https://thumbs.dreamstime.com/b/books-modern-headphones-light-blue-background-top-view-219896575.jpg"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/signup" className="link">
                SIGNUP
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

//export default TopBar;
