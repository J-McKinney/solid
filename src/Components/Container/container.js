import React from "react";
import Wrapper from "../Wrapper/wrapper";
import Container from "react-bootstrap/Container";
import Styles from "./container.module.css";

function container(props) {
  return (
    <>
      <Wrapper>
        <Container className={Styles.container} {...props}>
          {props.children}
        </Container>
      </Wrapper>
    </>
  );
}

export default container;
