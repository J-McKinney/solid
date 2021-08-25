import React, { Component } from "react";
import Button from "../Button/button";
import Styles from "./nav.module.css";

class nav extends Component {
  state = {
    show: true,
    scrollPos: 0,
    prevScrollPos: 0,
    open: false,
    changeNavBar: false,
    windowHeight: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }

  componentDidUpdate() {
    // console.log("show: " + this.state.show);
    // console.log("open: " + this.state.open);
    // console.log("chang: " + this.state.changeNavBar);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
      open: false,
      changeNavBar: false,
    });
    if (this.state.scrollPos <= 0 - 0.0001) {
      this.setState({
        prevScrollPos: this.state.scrollPos,
      });
      // console.log("show: " + this.state.show);
      console.log("scroll: " + this.state.scrollPos);
    }
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    console.log("Clicked On");
  };

  // toggleCollapse = (e) => {
  //   e.preventDefault();
  //   this.setState({ changeNavBar: !this.state.changeNavBar });
  //   if (this.state.open === false) {
  //     this.setState({ open: true });
  //   } else if (this.state.open === true) {
  //     this.setState({ open: false });
  //   } else {
  //     this.setState({ open: false });
  //   }
  // };

  render() {
    // const active = {
    //   zIndex: "1001 !important",
    //   backgroundColor: "#575f68ec",
    //   color: "#fff",
    //   position: "fixed",
    //   height: "50px",
    //   width: "100%",
    //   visibility: "visible",
    //   transition: "all 200ms ease-in",
    // };
    // const hidden = {
    //   zIndex: "1001 !important",
    //   backgroundColor: "#5e6f819a",
    //   color: "#fff",
    //   position: "fixed",
    //   height: "50px",
    //   width: "100%",
    //   visibility: "hidden",
    //   transition: "all 200ms ease-out",
    //   transform: "translate(0, -100%)",
    // };
    const bar = {
      width: "35px",
      height: "5px",
      backgroundColor: "#fff",
      margin: "4px 0",
      transition: "0.4s",
    };
    const changeBar1 = {
      transform: "rotate(-45deg) translate(-7.5px, 6px)",
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
          <div className={Styles.hamburgerNavBarWrapper}>
            <div id={Styles.brgrRow} className="row">
              <div id={Styles.brgrCol} className="col-md-12">
                <Button
                  className={Styles.brgrButton}
                  onClick={this.toggleCollapse}
                >
                  <div className={Styles.brgrIcon}>
                    <div
                      className={Styles.bar1}
                      style={this.state.changeNavBar ? changeBar1 : bar}
                    ></div>
                    <div
                      className={Styles.bar2}
                      style={this.state.changeNavBar ? changeBar2 : bar}
                    ></div>
                    <div
                      className={Styles.bar3}
                      style={this.state.changeNavBar ? changeBar3 : bar}
                    ></div>
                  </div>
                </Button>
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
