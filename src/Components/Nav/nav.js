import React, { Component } from "react";
import Styles from "./nav.module.css";

class nav extends Component {
  state = {
    show: true,
    scrollPos: 0,
    prevScrollPos: 0,
    open: false,
    changeNavBar: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }

  componentDidUpdate() {
    // console.log("open: " + this.state.open);
    console.log("show: " + this.state.show);
    // console.log("chang: " + this.state.changeNavBar);
    if (this.state.scrollPos > this.state.prevScrollPos) {
      // console.log("Hello");
    }
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
    }
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
            <div id={Styles.brgrRow} className="row">
              <div id={Styles.brgrCol} className="col-md-12">
                Hello World
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
