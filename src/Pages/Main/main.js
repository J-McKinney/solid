import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
import AnimatedBG from "../../Components/AnimatedBG/animatedBG";
import ThreeCol from "../../Components/ThreeColumns/threeColumns";
import Container from "../../Components/Container/container";
import Projects from "../../Components/ProjectBoxes/projectBoxes";
import Styles from "./main.module.css";

class main extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <AnimatedBG />
          <Nav />
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
          <div className={Styles.projectsWrapper}>
            <Container className={Styles.projectsContainer}>
              <h2 className={Styles.projectsTitle}>PROJECTS</h2>
              <Projects />
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default main;
