import React from "react";
import Styles from "./nav.module.css";

function nav(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className="row">
          <div id={Styles.home} className="col-md-2">
            <h4 className={Styles.h4}>
              <a className={Styles.href} href="/" alt="home">
                Home
              </a>
            </h4>
          </div>
          <div id={Styles.portfolio} className="col-md-7">
            <h4 className={Styles.h4}>
              <a className={Styles.href} href="/" alt="portfolio">
                Portfolio
              </a>
            </h4>
          </div>
          <div id={Styles.chat} className="col-md-3">
            <a className={Styles.href} href="/" alt="chat">
              Let's Chat
            </a>
            {/* At 575px-576px the NavBar Breaks and "Let's Chat" stacks on itself */}
          </div>
        </div>
      </div>
    </>
  );
}

export default nav;

// import React, { Component } from "react";

// class nav extends Component {
//   render() {
//     return (
//       <>
//         <div></div>
//       </>
//     );
//   }
// }

// export default nav;
