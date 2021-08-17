import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
// import Container from "../../Components/Container/container";
import Styles from "./main.module.css";

class main extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
        <Nav />
          {/* <Container></Container> */}
        </div>
      </>
    );
  }
}

export default main;
