import React from "react";
import OneColumn from "../OneColumn/oneColumn";
import Styles from "./threeColumns.module.css";

function threeColumns(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.allCol}>
            <div className={Styles.firstCol}>
              <OneColumn
                icon={<i class="fas fa-dice-d6"></i>}
                title="Website Design"
                titleContent="Responsive websites built for an optimal user experience that achieves your business goals."
                secondTitle="Things I enjoy designing:"
                secondTitleContent="UX, UI, Web, Mobile, Apps, & Logos"
                thirdTitle="Design Tools:"
                thirdTitleContent={
                  <ul className={Styles.ul}>
                    <li className={Styles.li}>Waves</li>
                    <li className={Styles.li}>Unreal Engine</li>
                    <li className={Styles.li}>Unity</li>
                    <li className={Styles.li}>Adobe</li>
                    <li className={Styles.li}>Tailwind</li>
                    <li className={Styles.li}>Bootstrap</li>
                    <li className={Styles.li}>Ant</li>
                    <li className={Styles.li}>React Bootstrap</li>
                    <li className={Styles.li}>Material UI</li>
                  </ul>
                }
              />
            </div>
            <div className={Styles.secondCol}>
              <OneColumn
                icon={<i class="fas fa-code"></i>}
                title="Full-Stack Developer"
                titleContent="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
                secondTitle="Laguages I speak:"
                secondTitleContent="HTML, CSS, JavaScript, JQuery, Firebase, Node, MySQL, Express, Handlebars, Mongoose, React/Native, Python, & Angular"
                thirdTitle="Dev Tools:"
                thirdTitleContent={
                  <ul className={Styles.ul}>
                    <li className={Styles.li}>Github</li>
                    <li className={Styles.li}>Gitlab</li>
                    <li className={Styles.li}>Codepen</li>
                    <li className={Styles.li}>Bootstrap</li>
                    <li className={Styles.li}>Bulma</li>
                    <li className={Styles.li}>Bitbucket</li>
                  </ul>
                }
              />
            </div>
            <div className={Styles.thirdCol}>
              <OneColumn
                icon={<i class="fas fa-book"></i>}
                title="Collaboration"
                titleContent="I genuinely care about people, and love helping fellow designers work on their craft."
                secondTitle="Experiences I draw from:"
                secondTitleContent="UX/UI, Product design, Freelancing, Tutorial videos, ads, & my friends and family"
                thirdTitle="Stats:"
                thirdTitleContent={
                  <ul className={Styles.ul}>
                    <li className={Styles.li}>3+ years of experience</li>
                    <li className={Styles.li}>150+ Open repositories</li>
                    <li className={Styles.li}>2900+ Total Commits</li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default threeColumns;
