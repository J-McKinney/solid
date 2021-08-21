import React from "react";
import OneColumn from "../OneColumn/oneColumn";
import Styles from "./threeColumns.module.css";

function threeColumns(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.allCol}>
            <div className={Styles.firstCol}>
              <OneColumn
                icon="icon icon"
                title="Title Title Title"
                titleContent="Title Content Title Content Title Content Title Content Title Content"
                secondTitle="Second Title"
                secondTitleContent="Second Title Content"
                thirdTitle="Third Title"
                thirdTitleContent="Third Title Content"
              />
            </div>
            <div className={Styles.secondCol}>
              <OneColumn
                icon="icon icon"
                title="Title Title Title"
                titleContent="Title Content Title Content Title Content Title Content Title Content"
                secondTitle="Second Title"
                secondTitleContent="Second Title Content"
                thirdTitle="Third Title"
                thirdTitleContent="Third Title Content"
              />
            </div>
            <div className={Styles.thirdCol}>
              <OneColumn
                icon="icon icon"
                title="Title Title Title"
                titleContent="Title Content Title Content Title Content Title Content Title Content"
                secondTitle="Second Title"
                secondTitleContent="Second Title Content"
                thirdTitle="Third Title"
                thirdTitleContent="Third Title Content"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default threeColumns;
