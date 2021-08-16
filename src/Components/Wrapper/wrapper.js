import React from "react";
import Styles from "./wrapper.module.css";

function wrapper(props) {
  return (
    <>
      <div className={Styles.wrapper}>{props.children}</div>
    </>
  );
}

export default wrapper;
