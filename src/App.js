import React from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home";
import Test from "./components/Test";
import Login from "./components/Login";
import PublicNavbar from "./components/PublicNavbar";
import JobsList from "./components/JobsList";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/jobs" exact component={JobsList} />
        <Route path="/jobs/:id" component={JobDetail} />
	    </Switch>
    </div>
  );
}

export default App;
