import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span> */}
      </div>
      <img
        className="headerImg"
        // src="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809__480.jpg"
        // src="images/home.jpg"
        src="/images/home_page.jpg"
        //src="https://www.ice.org.uk/media/upknvem5/neurodiversity-books.jpg"
        //src="https://i.pinimg.com/originals/c8/b0/7e/c8b07e380215edaaa1903769586a61dc.jpg"
        alt="home"
      />
    </div>
  );
}

export default Header;
