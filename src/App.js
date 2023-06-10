import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/Login/Login";
import Signup from "./pages/Sign_Up/Signup";
import Posts from "./components/posts/Posts";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">{<Signup />}</Route>
        <Route path="/login">{<Login />}</Route>
        <Route path="/write">{<Write />}</Route>
        <Route path="/settings">{<Settings />}</Route>
        <Route path="/post/:postId">
          <Route path="/posts">{<Posts />}</Route>
          <Single />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
