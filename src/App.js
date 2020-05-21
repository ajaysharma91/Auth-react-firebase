import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Layout/Nav";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from './component/projects/ProjectDetails';
import Createproject from "./component/projects/CreateProject";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createproject" component={Createproject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
