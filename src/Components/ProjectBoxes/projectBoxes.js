import React from "react";
import Styles from "./projectBoxes.module.css";

const projectBoxes = (props) => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.box}>
            <div className={Styles.innerBox}></div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}></div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}></div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}></div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}></div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectBoxes;
