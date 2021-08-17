import React, { Component } from "react";
import Nav from "../../Components/Nav/nav";
import Styles from "./contact.module.css";

class contact extends Component {
  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Nav />
        </div>
      </>
    );
  }
}

export default contact;
