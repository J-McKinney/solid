import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
import AnimatedBG from "../../Components/AnimatedBG/animatedBG";
import Container from "../../Components/Container/container";
import Cards from "../../Components/Cards/cards";
import Styles from "./main.module.css";

class main extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Nav />
          {/* //////////Need Filler////////// */}
          <AnimatedBG />
          {/* //////////Need Filler////////// */}
          <Container />
          <Cards />
        </div>
      </>
    );
  }
}

export default main;
