import React from "react";
import Styles from "./wrapper.module.css";

function wrapper(props) {
  return (
    <>
      <div className={Styles.wrapper} {...props}>{props.children}</div>
      {/* <main className={Styles.wrapper} {...props}>{props.children}</main> */}
    </>
  );
}

export default wrapper;
