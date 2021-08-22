import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
import Container from "react-bootstrap/Container";
import Styles from "./contact.module.css";

class contact extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className={Styles.wrapper}>
          <Container></Container>
        </div>
      </>
    );
  }
}

export default contact;
