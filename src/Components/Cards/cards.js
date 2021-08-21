import React from "react";
import SingleCard from "../SingleCard/singleCard";
import Microphone from "../../images/microphone.jpg";
import Golf from "../../images/golf.jpg";
import Vapor from "../../images/vapor.jpg";
import Launch from "../../images/launch.jpg";
import Styles from "./cards.module.css";

function cards(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <SingleCard
            dataText="SimiTune"
            imgSrc={Microphone}
            imgAlt="SimilTune"
            hoverCardTitle="SimilTune"
            link="/"
            hoverCardParagraph="A Speech-to-Text song association game. A word will be shown on the screen, you will have 10 sec to sing a song that contains that word. Points are based on time left on submit."
            linkTitle="Read More"
          />
          <SingleCard
            dataText="Fore-Cast"
            imgSrc={Golf}
            imgAlt="Fore-Cast"
            hoverCardTitle="Fore-Cast"
            link="/"
            hoverCardParagraph="Using reverse-geocoding, Yelp API, and the Weather API to know the weather and find the closest places to golf in a 50 mile radius."
            linkTitle="Read More"
          />
          <SingleCard
            dataText="Vent"
            imgSrc={Vapor}
            imgAlt="Vent"
            hoverCardTitle="Vent"
            link="/"
            hoverCardParagraph="A personal journal to share with anyone signed on. Anything posted will expire in 30 min on submit. Go ahead and vent."
            linkTitle="Read More"
          />
          <SingleCard
            dataText="J-BOT"
            imgSrc={Launch}
            imgAlt="J-BOT"
            hoverCardTitle="J-BOT"
            link="/"
            hoverCardParagraph="STEM learning site for kids to learn by playing games. Parents can monitor their kids screen time and progress through the exercises."
            linkTitle="Read More"
          />
        </div>
      </div>
    </>
  );
}

export default cards;
