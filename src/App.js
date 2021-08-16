// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/main";
// import Portfolio from "./Pages/Portfolio/portfolio";
// import Contact from "./Pages/Contact/contact";
// import Error from "./Pages/Error/error";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/**/}
      <Main />
      {/* <Portfolio /> */}
      {/* <Error /> */}
      {/**/}
    </>
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // <>
    //   <Router basename="/">
    //     <Switch>
    //       <Route exact path="/solid" component={Main} />
    //       <Route exact path="/Portfolio" component={Portfolio} />
    //       <Route exact path="/Contact" component={Contact} />
    //       <Route exact path="*" component={Error} />
    //     </Switch>
    //   </Router>
    // </>
  );
}

export default App;
