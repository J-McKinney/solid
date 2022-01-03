import React, { Component } from "react";
import anime from "animejs";
import Styles from "./style.module.css";
import "./animatedBG.css";

class animatedBG extends Component {
  state = {};

  componentDidMount() {
    this.animateBlocks();
  }
  componentWillUnmount() {}
  componentDidUpdate() {}

  animateBlocks = () => {
    let container = document.querySelector(".BGContainer");
    for (var i = 0; i <= 90; i++) {
      // for (var i = 0; i <= 250; i++) {
      let blocks = document.createElement("div");
      blocks.classList.add("block");
      container.appendChild(blocks);
    }

    anime({
      targets: ".block",
      translateX: function () {
        return anime.random(-800, 800);
      },
      translateY: function () {
        return anime.random(-300, 300);
      },
      scale: function () {
        return anime.random(1, 4);
      },
      easing: "linear",
      duration: 1000,
      boxShadow: function () {
        return "10px 10px 50px rgba(0, 0, 0, 0.6)";
      },
      delay: anime.stagger(200),
    });
  };

  render() {
    return (
      <>
        <div className="BGWrapper">
          <div className="BGContainer">
            <h2 className={Styles.title}>
              <span className={Styles.span}>Jesse McKinney</span>
            </h2>
          </div>
          {/* <br /> */}
        </div>
      </>
    );
  }
}

export default animatedBG;
