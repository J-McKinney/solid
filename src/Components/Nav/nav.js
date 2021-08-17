import React from "react";
import Wrapper from "../Wrapper/wrapper";
import Styles from "./nav.module.css";

function nav(props) {
  return (
    <>
      <Wrapper>
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
            <div className="col-sm-5" />
            <div id={Styles.portfolio} className="col-sm-2">
              <h3 className={Styles.h3}>
                <a className={Styles.href} href="/" alt="home">
                  <h4 className={Styles.h4}>Portfolio</h4>
                </a>
              </h3>
            </div>
            <div id={Styles.chat} className="col-sm-2">
              <h3 className={Styles.h3}>
                <a className={Styles.href} href="/" alt="home">
                  <h4 className={Styles.h4}>Let's Chat</h4>
                  {/* At 713px-714px the NavBar Breaks and "Let's Chat" stacks on itself */}
                </a>
              </h3>
            </div>
            <div className="col-sm-1" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default nav;
