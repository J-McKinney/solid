import React from "react";
import Styles from "./nav.module.css";

function nav(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-1">
            <h3 className={Styles.h3}>
              <a className={Styles.href} href="/" alt="home">
                <h4 className={Styles.h4}>Home</h4>
              </a>
            </h3>
          </div>
          <div className="col-sm-7" />
          <div className="col-sm-1">
            <h3 className={Styles.h3}>
              <a className={Styles.href} href="/" alt="home">
                <h4 className={Styles.h4}>Portfolio</h4>
              </a>
            </h3>
          </div>
          <div className="col-sm-1">
            <h3 className={Styles.h3}>
              <a className={Styles.href} href="/" alt="home">
                <h4 className={Styles.h4}>Let's Chat</h4>
              </a>
            </h3>
          </div>
          <div className="col-sm-1" />
        </div>
      </div>
    </>
  );
}

export default nav;
