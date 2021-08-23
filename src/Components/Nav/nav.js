import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Styles from "./nav.module.css";
import NavStyle from "./MyNavBar.module.css";

class nav extends Component {
  state = {
    show: true,
    scrollPos: 0,
    open: false,
    changeNavBar: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {}

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
      open: false,
      changeNavBar: false,
    });
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
    if (this.state.open === false) {
      this.setState({ open: true });
    } else if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: false });
    }
  };

  render() {
    const active = {
      zIndex: "1001 !important",
      backgroundColor: "#575f68ec",
      color: "#fff",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "visible",
      transition: "all 200ms ease-in",
    };
    const hidden = {
      zIndex: "1001 !important",
      backgroundColor: "#5e6f819a",
      color: "#fff",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "hidden",
      transition: "all 200ms ease-out",
      transform: "translate(0, -100%)",
    };
    const bar = {
      width: "35px",
      height: "5px",
      backgroundColor: "#1e7df0",
      margin: "4px 0",
      transition: "0.4s",
    };
    const changeBar1 = {
      transform: "rotate(-45deg) translate(-7px, 6px)",
    };
    const changeBar2 = {
      opacity: "0",
    };
    const changeBar3 = {
      transform: "rotate(45deg) translate(-7px, -6px)",
    };
    return (
      <>
        <div className={Styles.wrapper}>
          {/* Full Screen NavBar */}
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
            </div>
          </div>
          {/* Full Screen NavBar */}
          {/* Hamburger NavBar */}
          <div className={Styles.hamburgerNavBar}>
            <div
              className={NavStyle.navBarWrapper}
              style={this.state.show ? active : hidden}
            >
              <div className={NavStyle.navbar}>
                <div className={NavStyle.buttonWrapper}>
                  {/* NAVBAR CONTENT */}
                  <Row className={NavStyle.navBarRow}>
                    <Col>
                      {/* NAVBAR BUTTON */}
                      <Button
                        className={NavStyle.menuButton}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.open}
                        onClick={this.toggleCollapse}
                      >
                        <div className={NavStyle.menuIconContainer}>
                          <div
                            className={NavStyle.bar1}
                            style={this.state.changeNavBar ? changeBar1 : bar}
                          ></div>
                          <div
                            className={NavStyle.bar2}
                            style={this.state.changeNavBar ? changeBar2 : bar}
                          ></div>
                          <div
                            className={NavStyle.bar3}
                            style={this.state.changeNavBar ? changeBar3 : bar}
                          ></div>
                        </div>
                      </Button>
                      {/* NAVBAR BUTTON */}
                    </Col>
                  </Row>
                  {/* NAVBAR CONTENT */}
                  {/* COLLAPSE CONTENT */}
                  <Collapse in={this.state.open}>
                    <div
                      id="example-collapse-text"
                      className={NavStyle.collapsingContent}
                    >
                      <div className={NavStyle.contentDiv}>
                        <Container className={NavStyle.contentContainer}>
                          <Row className={NavStyle.contentHeader}>
                            <h3 className={NavStyle.h3}>
                              <a
                                href="#top-of-page"
                                className={NavStyle.a}
                                style={{ color: "#1e7df0" }}
                              >
                                Jesse McKinney
                              </a>
                            </h3>
                          </Row>
                          <Row className={NavStyle.contentRow}>
                            <Col className={NavStyle.contentCol}>
                              <a
                                href="#about-info"
                                className={NavStyle.a}
                                style={{ color: "#1e7df0" }}
                              >
                                About Me
                              </a>
                              <br />
                              <a
                                href="#portfolio-info"
                                className={NavStyle.a}
                                style={{ color: "#1e7df0" }}
                              >
                                Portfolio
                              </a>
                              <br />
                              <a
                                href="#contact-info"
                                className={NavStyle.a}
                                style={{ color: "#1e7df0" }}
                              >
                                Contact Me
                              </a>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </div>
                  </Collapse>
                  {/* COLLAPSE CONTENT */}
                </div>
              </div>
            </div>
          </div>
          {/* Hamburger NavBar */}
        </div>
      </>
    );
  }
}

export default nav;
