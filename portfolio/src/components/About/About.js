import React from "react";
import { stackList } from "../../data/ProjectData";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import "animate.css/animate.min.css";
import "./about.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import "./about.css";
// import div from "react-animate-on-scroll";
function About() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">

        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeInRight" animateOut="animate__fadeOutUp">
              <Image
                src="/hero.png"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOut="animate__lightSpeedOutRight">
                <div>
                  Hello! My name is <strong>Avinash Yeddu</strong>. I'm a 3rd year CSE undergrad from NIT Durgapur, West Bengal, India. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my communication skills, and adaptability.
                </div>
              </ScrollAnimation>

              <br /><br />

              <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut="animate__lightSpeedOutLeft">
                <div>
                  My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Science and Engineering program.
                </div>
              </ScrollAnimation>

              <br /><br />

              <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOut="animate__lightSpeedOutRight">
                <div>
                  Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development.
                  <div className="tagline2">
                    I have become confident using the following technologies:
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOut="animate__lightSpeedOutLeft">
                <Technologies>
                  {stackList.map((stack, index) => (
                    <div key={index}>
                      <Tech key={index} className="tech">
                        <TechImg src={stack.img} alt={stack.name} />
                        <TechName>{stack.name}</TechName>
                      </Tech>
                    </div>
                  ))}
                </Technologies>
              </ScrollAnimation>
            </div>

          </div>
        </div>

      </ContactWrapper>
    </>
  );
}

export default About;
