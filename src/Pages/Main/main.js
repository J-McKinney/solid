import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
import AnimatedBG from "../../Components/AnimatedBG/animatedBG";
import FadeDown from "../../Components/FadingContainer/fadeDown";
import ThreeCol from "../../Components/ThreeColumns/threeColumns";
import FadeUp from "../../Components/FadingContainer/fadeUp";
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
          <FadeDown />
          <Container className={Styles.bioContainer}>
            <p className={Styles.bioP}>
              I am a certified and versatile full stack developer with 3+ years
              of experience developing and managing complex sites and internal
              frameworks seeking a full time position in development.
              Specializing in JavaScript frameworks and responsive designs with
              dedication to quality work and a high attention to detail.
              Demonstrating flawless code to create, maintain, and deploy
              websites and apps.
            </p>
          </Container>
          <ThreeCol />
          <FadeUp />
          <div className={Styles.fav_wrapper}>
            <Container className={Styles.fav_Container}>
              <h2 className={Styles.fav_Title}>My Favorite Work</h2>
            </Container>
          </div>
          <Cards />
          <FadeDown />
        </div>
      </>
    );
  }
}

export default main;
