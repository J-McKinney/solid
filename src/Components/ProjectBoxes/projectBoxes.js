import React from "react";
import forecast from "../../images/ForecastReactNative.png";
import stones from "../../images/InfStonesGame.jpg";
import limbo from "../../images/LimboHangMan.jpg";
import similtune from "../../images/Similtune.png";
import smarta from "../../images/SmartaApp.jpg";
import bamazon from "../../images/BamazonNode.jpg";
import Styles from "./projectBoxes.module.css";

const projectBoxes = (props) => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.box}>
            <div className={Styles.innerBox}>
              <img
                className={Styles.forecast}
                src={forecast}
                alt="Find the closest place to golf and the weather"
              />
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}>
              <img
                className={Styles.stones}
                src={stones}
                alt="Infinity stones number guessing game"
              />
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}>
              <img
                className={Styles.limbo}
                src={limbo}
                alt="Liquor brand hangman guessing game"
              />
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}>
              <img
                className={Styles.similtune}
                src={similtune}
                alt="Song association speech to text guessing game"
              />
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}>
              <img
                className={Styles.smarta}
                src={smarta}
                alt="Smarta, a better way to Marta in Georgia"
              />
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.innerBox}>
              <img
                className={Styles.bamazon}
                src={bamazon}
                alt="Back-end amazon mock CLI"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectBoxes;
