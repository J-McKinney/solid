import React, { Component } from "react";
import Container from "../../Components/Container/container";
import Styles from "./main.module.css";

class main extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Container>
          </Container>
        </div>
      </>
    );
  }
}

export default main;
