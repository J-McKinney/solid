import React from "react";
import Wrapper from "../Wrapper/wrapper";
import Styles from "./container.module.css";

function container(props) {
  return (
    <>
      <Wrapper>
        <div className={Styles.container} {...props}>
          {props.children}
        </div>
      </Wrapper>
    </>
  );
}

export default container;
