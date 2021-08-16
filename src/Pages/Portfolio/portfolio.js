import React, { Component } from "react";
import Container from "../../Components/Container/container";
import Styles from "./portfolio.module.css";

class portfolio extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Container></Container>
        </div>
      </>
    );
  }
}

export default portfolio;
