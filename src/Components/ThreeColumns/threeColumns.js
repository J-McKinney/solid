import React from "react";
import OneColumn from "../OneColumn/oneColumn";
import Styles from "./threeColumns.module.css";

function threeColumns(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className="row">
          <div className="col-md-4">
            <OneColumn
              className={Styles.firstColumn}
              icon="icon"
              title="Title"
              titleContent="Title Content"
              secondTitle="Second Title"
              secondTitleContent="Second Title Content"
              thirdTitle="Third Title"
              thirdTitleContent="Third Title Content"
            />
          </div>
          <div className="col-md-4">
            <OneColumn
              className={Styles.secondColumn}
              icon="icon"
              title="Title"
              titleContent="Title Content"
              secondTitle="Second Title"
              secondTitleContent="Second Title Content"
              thirdTitle="Third Title"
              thirdTitleContent="Third Title Content"
            />
          </div>
          <div className="col-md-4">
            <OneColumn
              className={Styles.thirdColumn}
              icon="icon"
              title="Title"
              titleContent="Title Content"
              secondTitle="Second Title"
              secondTitleContent="Second Title Content"
              thirdTitle="Third Title"
              thirdTitleContent="Third Title Content"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default threeColumns;
