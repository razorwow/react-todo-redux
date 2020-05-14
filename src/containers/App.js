import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import PostsContainer from "./PostsContainer";
import UsersContainer from "./UsersContainer";
import UserContainer from "./UserContainer";

const App = () => {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Navbar />
        <Switch>
          <Route path="/" exact component={PostsContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/user/:id" children={<UserContainer />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
