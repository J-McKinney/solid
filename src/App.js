import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/main";
import Portfolio from "./Pages/Portfolio/portfolio";
import Contact from "./Pages/Contact/contact";
import Error from "./Pages/Error/error";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  // Load Icon
  // authenticate() {
  //   return new Promise((resolve) => setTimeout(resolve, 2000));
  // }
  // componentDidMount() {
  //   this.authenticate().then(() => {
  //     const ele = document.getElementById("ipl-progress-indicator");
  //     if (ele) {
  //       // fade out
  //       ele.classList.add("available");
  //       setTimeout(() => {
  //         // remove from DOM
  //         ele.outerHTML = "";
  //       }, 2000);
  //     }
  //   });
  // }
  // Load Icon
  render() {
    return (
      <>
        <Router basename="/">
          <Switch>
            <Route exact path="/solid" component={Main} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={Error} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
