import React from "react";
import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/sidebar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
