import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
import AnimatedBG from "../../Components/AnimatedBG/animatedBG";
// import Faded from "../../Components/FadingContainer/faded";
import Container from "../../Components/Container/container";
import Cards from "../../Components/Cards/cards";
import Styles from "./main.module.css";

class main extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Nav />
          <AnimatedBG />
          <Container className={Styles.bioContainer}>
            I am a certified and versatile full stack developer with 3+ years of
            experience developing and managing complex sites and internal
            frameworks seeking a full time position in development. Specializing
            in JavaScript frameworks and responsive designs with dedication to
            quality work and a high attention to detail. Demonstrating flawless
            code to create, maintain, and deploy websites and apps.
          </Container>
          <Cards />
        </div>
      </>
    );
  }
}

export default main;
