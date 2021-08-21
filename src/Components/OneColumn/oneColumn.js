import React from "react";
import Styles from "./oneColumn.module.css";

function oneColumn(props) {
  return (
    <>
      <div className={Styles.wrapper} {...props}>
        <div className={Styles.icon}>{props.icon}</div>
        <h2 className={Styles.title}>{props.title}</h2>
        <h3 className={Styles.titleContent}>{props.titleContent}</h3>
        <br />
        <h2 className={Styles.secondTitle}>{props.secondTitle}</h2>
        <h3 className={Styles.secondTitleContent}>
          {props.secondTitleContent}
        </h3>
        <br />
        <h2 className={Styles.thirdTitle}>{props.thirdTitle}</h2>
        <h3 className={Styles.thirdTitleContent}>{props.thirdTitleContent}</h3>
      </div>
    </>
  );
}

export default oneColumn;
