import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function signUp() {
  return (
    <div className="first">
      <div className="body1 ">
        <div className="signUp1">
          <img
            className="signUpImg"
            src="https://media.istockphoto.com/id/1203194312/photo/magic-book-open.jpg?s=170667a&w=0&k=20&c=F7Oz9KMkucEBjvgVVARlbIzQkIcHC_X3kDO2RHdxd30="
            alt=""
          />
        </div>
        <div className="signUp">
          <form className="signUpForm">
            <label>Email-id</label>
            <input type="email" placeholder="Enter you email..." />
            <label>Username</label>
            <input type="text" placeholder="Enter you username..." />
            <label>Password</label>
            <input type="text" placeholder="Enter you password..." />
            <button className="signUpButton">Sign Up</button>
          </form>
          <button className="signUpButton loginButton">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
