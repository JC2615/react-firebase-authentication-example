import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import CreateUser2 from "./components/CreateUser2";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CreateUser">Create User</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/CreateUser2">
            <CreateUser2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
