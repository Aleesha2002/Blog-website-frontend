import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="first">
      <div className="body1 ">
        <div className="login1">
          <img
            className="loginImg"
            src="https://t4.ftcdn.net/jpg/05/54/92/73/360_F_554927304_Wyj2dPjl3eK1UBIRmHQTQFE9uQYDEitt.jpg"
            alt=""
          />
        </div>
        <div className="login">
          <form className="loginForm">
            <label>Email-id</label>
            <input type="text" placeholder="Enter you email..." />
            <label>Password</label>
            <input type="text" placeholder="Enter you password..." />
            <button className="loginButton">Login</button>
          </form>
          <button className="loginButton registerButton">
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
