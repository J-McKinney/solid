import React from "react";
import Styles from "./nav.module.css";

function nav(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div id={Styles.row} className="row">
          <div id={Styles.home} className="col-md-2">
            <h4 className={Styles.h4}>
              <a
                className={Styles.href}
                href="https://j-mckinney.github.io/solid/"
                alt="home"
              >
                Home
              </a>
            </h4>
          </div>
          <div id={Styles.portfolio} className="col-md-7">
            <h4 className={Styles.h4}>
              <a
                className={Styles.href}
                href="https://j-mckinney.github.io/solid/"
                alt="portfolio"
              >
                Portfolio
              </a>
            </h4>
          </div>
          <div id={Styles.chat} className="col-md-3">
            <h4 className={Styles.h4}>
              <a
                className={Styles.href}
                href="https://j-mckinney.github.io/solid/"
                alt="chat"
              >
                Let's Chat
              </a>
            </h4>
            {/* At 575px-576px the NavBar Breaks and "Let's Chat" stacks on itself */}
          </div>
        </div>
      </div>
    </>
  );
}

export default nav;
