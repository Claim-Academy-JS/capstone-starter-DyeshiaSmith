import React from "react";
import Login from "./components/Login/Login";
import Navigation from "./components/HomePage/Navigation";
import Equipment from "./components/BookTools/Equipment";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Router>
          <Route path="/BookTools" component={Equipment} />
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Navigation} />
        </Router>
      </main>
    );
  }
}
