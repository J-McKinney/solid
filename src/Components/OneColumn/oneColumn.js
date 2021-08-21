import React from "react";
import Styles from "./oneColumn.module.css";

function oneColumn(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.icon}>{props.icon}</div>
          <h2 className={Styles.title}>{props.title}</h2>
          <h4 className={Styles.titleContent}>{props.titleContent}</h4>
          <br />
          <h3 className={Styles.secondTitle}>{props.secondTitle}</h3>
          <h4 className={Styles.secondTitleContent}>
            {props.secondTitleContent}
          </h4>
          <br />
          <h3 className={Styles.thirdTitle}>{props.thirdTitle}</h3>
          <h4 className={Styles.thirdTitleContent}>
            {props.thirdTitleContent}
          </h4>
        </div>
      </div>
    </>
  );
}

export default oneColumn;
