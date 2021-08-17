import React from "react";
import Button from "react-bootstrap/Button";
import Styles from "./button.module.css";

function button(props) {
  return (
    <>
      <Button className={Styles.button} {...props}>
        {props.children}
      </Button>
    </>
  );
}

export default button;
