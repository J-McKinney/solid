import React from "react";
import Styles from "./projectBoxes.module.css";

const projectBoxes = (props) => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.box}></div>
          <div className={Styles.box}></div>
          <div className={Styles.box}></div>
          <div className={Styles.box}></div>
          <div className={Styles.box}></div>
          <div className={Styles.box}></div>
        </div>
      </div>
    </>
  );
};

export default projectBoxes;
