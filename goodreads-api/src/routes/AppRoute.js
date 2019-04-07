import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import About1 from '../About'

function Index() {
  return <App />;
}

function About() {
  return <About1 />;
}

function Users() {
  return <h2>Users</h2>;
}


function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;