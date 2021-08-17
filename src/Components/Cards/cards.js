import React from "react";
import SingleCard from "../SingleCard/singleCard";
import Design from "../../images/design.jpg";
import Code from "../../images/code.jpg";
import Launch from "../../images/launch.jpg";
import Earn from "../../images/earn.jpg";
import Styles from "./cards.module.css";

function cards(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <SingleCard
            dataText="Design"
            imgSrc={Design}
            imgAlt="Design"
            hoverCardTitle="Design"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Nobodys killing me until 
            after I catch my wife with another man. Snuffles 
            was my slave name. You can call me Snowball, 
            because my fur is pretty and white. Quote mode. 
            We all wanna die, we are meeseeks!"
          />
          <SingleCard
            dataText="Code"
            imgSrc={Code}
            imgAlt="Code"
            hoverCardTitle="Code"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Nobodys killing me until 
            after I catch my wife with another man. Snuffles 
            was my slave name. You can call me Snowball, 
            because my fur is pretty and white. Quote mode. 
            We all wanna die, we are meeseeks!"
          />
          <SingleCard
            dataText="Launch"
            imgSrc={Launch}
            imgAlt="Launch"
            hoverCardTitle="Launch"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Nobodys killing me until 
            after I catch my wife with another man. Snuffles 
            was my slave name. You can call me Snowball, 
            because my fur is pretty and white. Quote mode. 
            We all wanna die, we are meeseeks!"
          />
          <SingleCard
            dataText="Earn"
            imgSrc={Earn}
            imgAlt="Earn"
            hoverCardTitle="Earn"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Nobodys killing me until 
            after I catch my wife with another man. Snuffles 
            was my slave name. You can call me Snowball, 
            because my fur is pretty and white. Quote mode. 
            We all wanna die, we are meeseeks!"
          />
        </div>
      </div>
    </>
  );
}

export default cards;
