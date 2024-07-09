import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";
import "./ImageAnimation.css";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="lightSpeedInLeft" animateOut="lightSpeedOutLeft" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Avinash Yeddu.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Full-Stack Developer.',
                    1000,
                    'A 4th year UnderGrad at NIT Durgapur.',
                    1000,
                    'A code enthusiast.',
                    1000,
                    'A problem solver.',
                    1000,
                    'A passionate learner.',
                    1000,
                    'A tech explorer.',
                    1000,
                    'A coffee lover.',
                    1000,
                    'A dreamer.',
                    1000,
                    'A....',
                    1000,
                    'A.... curious mind?',
                    1000,
                    "Ok...",
                    1000,
                    "Ok... let's see what's next...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... do you like coding too?",
                    1000,
                    "Maybe check out my projects?",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "You're still here?",
                    1000,
                    "Cool! Let's restart the loop!",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="backInRight" animateOut="backOutRight">
              <Image
                src="/hero.png"
                alt="hero"
                className="animated-image"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && <ScrollAnimation animateIn="animate__rotateIn" animateOut="rotateOut" offset={0}>
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              Scroll down
              <img
                src="/scroll-down.svg"
                alt="scroll-down"
              />
            </ScrollLink>
          </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
