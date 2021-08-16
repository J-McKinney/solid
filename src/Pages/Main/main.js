import React, { Component } from "react";
import Container from "../../Components/Container/container";
import Styles from "./main.module.css";

class main extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Container>
            <div className={Styles.block}>
              <h1>Hello World!!!</h1>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default main;
