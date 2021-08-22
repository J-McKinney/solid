import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/main";
import Portfolio from "./Pages/Portfolio/portfolio";
import Contact from "./Pages/Contact/contact";
import Error from "./Pages/Error/error";
import "./App.css";

function App() {
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

export default App;
