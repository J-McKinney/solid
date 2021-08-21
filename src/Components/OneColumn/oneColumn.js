import React from "react";
import Styles from "./oneColumn.module.css";

function oneColumn(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.icon}>{props.icon}</div>
          <h2 className={Styles.title}>{props.title}</h2>
          <h5 className={Styles.titleContent}>{props.titleContent}</h5>
          <br />
          <h4 className={Styles.secondTitle}>{props.secondTitle}</h4>
          <h5 className={Styles.secondTitleContent}>
            {props.secondTitleContent}
          </h5>
          <br />
          <h4 className={Styles.thirdTitle}>{props.thirdTitle}</h4>
          <h5 className={Styles.thirdTitleContent}>
            {props.thirdTitleContent}
          </h5>
        </div>
      </div>
    </>
  );
}

export default oneColumn;
