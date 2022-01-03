import React, { Component } from "react";
import Button from "../Button/button";
import Styles from "./nav.module.css";

class nav extends Component {
  state = {
    show: true,
    scrollPos: 0,
    open: false,
    changeNavBar: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate() {
    // console.log("show: " + this.state.show);
    // console.log("open: " + this.state.open);
    // console.log("chang: " + this.state.changeNavBar);
    // console.log("ScrollPos: " + this.state.scrollPos);
  }

  updateWindowDimensions() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight) {
        // Full Screen NavBar
        document.getElementById("navBarWrapper").classList.add("fixed-top");
        let navbar_height =
          document.getElementById("navBarWrapper").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
        // Hamburger NavBar
        document.getElementById("hamburgerNavBarWrapper").classList.add("fixed-top");
        let brgr_navbar_height =
          document.getElementById("hamburgerNavBarWrapper").offsetHeight;
        document.body.style.paddingTop = brgr_navbar_height + "px";
      } else {
        // Full Screen NavBar
        document.getElementById("navBarWrapper").classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
        // Hamburger NavBar
        document.getElementById("hamburgerNavBarWrapper").classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
      }
    });
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top * -1,
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
      transform: "rotate(-45deg) translate(-7px, 5.5px)",
    };
    const changeBar2 = {
      opacity: "0",
    };
    const changeBar3 = {
      transform: "rotate(45deg) translate(-7px, -5.5px)",
    };
    return (
      <>
        <nav id="navBarWrapper">
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
          <div
            id="hamburgerNavBarWrapper"
            className={Styles.hamburgerNavBarWrapper}
          >
            <div id={Styles.brgrRow} className="brgerRow">
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
        </nav>
      </>
    );
  }
}

export default nav;
