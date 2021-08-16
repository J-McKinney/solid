// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./Pages/Landing/landing";
import Main from "./Pages/Main/main";
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
      {/* <Landing /> */}
      <Main />
      {/* <Error /> */}
      {/**/}
    </>
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // <>
    //   <Router basename="/">
    //     <Switch>
    //       <Route exact path="/solid" component={Landing} />
    //       <Route exact path="/Main" component={Main} />
    //       <Route exact path="*" component={Error} />
    //     </Switch>
    //   </Router>
    // </>
  );
}

export default App;
