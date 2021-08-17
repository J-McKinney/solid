import React, { Component } from "react";
import anime from "animejs";
import "./animatedBG.module.css";

class animatedBG extends Component {
  state = {};

  componentDidMount() {
    this.animateBlocks();
  }
  componentWillUnmount() {}
  componentDidUpdate() {}

  animateBlocks = () => {
    let container = document.querySelector(".BGContainer");
    for (var i = 0; i <= 500; i++) {
      // let array= []
      let blocks = document.createElement("div");
      // blocks.style.background = "red";
      blocks.classList.add("block");
      container.appendChild(blocks);
      // array.unshift(blocks)
    }

    anime({
      targets: ".block",
      translateX: function () {
        return anime.random(-1700, 1700);
      },
      translateY: function () {
        return anime.random(-1500, 1500);
      },
      scale: function () {
        return anime.random(1, 5);
      },
      easing: "linear",
      // easing: "easeInOutSine",
      // easing: "easeInOutCirc",
      duration: 7000,
      boxShadow: function () {
        return "10px 10px 50px rgba(0, 0, 0, 0.6)";
      },
      delay: anime.stagger(10),
      // Complete the animation effect on screen
      // complete: this.animateBlocks,
    });
  };

  render() {
    return (
      <>
        <div className="BGWrapper">
          <div className="BGContainer">
            {/* <h2>
              <span>My First video on</span>
              <br />
              Anime.JS
            </h2> */}
            {/* <div className="blockOne" /> */}
          </div>
        </div>
      </>
    );
  }
}

export default animatedBG;
