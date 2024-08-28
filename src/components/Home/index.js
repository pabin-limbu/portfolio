import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { delay, motion, useInView, AnimatePresence } from "framer-motion";
import computerImage from "../../Uploads/computer.jpg";
import Sidebar from "../Sidebar";
import Contact from "../Contact";
import ProjectCard from "../ProjectCard";
import ExampleDiv from "../ExampleDiv";

const projectsRecent = [
  {
    title: "FoodMe",
    subTitle: "Order your favourite food",
    description:
      "Your ultimate destination for discovering and ordering from the best restaurants in your city. Whether you’re a food lover looking to satisfy your cravings or an entrepreneur wanting to manage your own restaurant, we’ve got you covered. Enjoy seamless online payments and real-time order tracking for a hassle-free experience.",
    webSiteLink: "https://react-sewa-frontend.onrender.com",
    imgLink: require("../../Uploads/foodMe.png"),
    backgroundColor: "#217039",
  },
  {
    title: "Vintage Lens",
    subTitle: "Capture timeless moments with a touch of nostalgia.",
    description:
      "Your premier destination for a wide variety of meticulously preserved vintage camera lenses and accessories. Experience the charm of classic photography with our carefully curated collection, all available for purchase through secure online payments.",
    webSiteLink: "https://nextecommerce-front.vercel.app/",
    imgLink: require("../../Uploads/Vl.png"),
    backgroundColor: "#161314",
  },
];

const projectsOther = [
  {
    title: "Star Wars",
    subTitle:
      "Defend Earth from alien invasions with the power of addition and reflex",
    description:
      "Challenge your math skills to defend Earth from alien invasions! Randomly generated spaceships require precise number matching or addition to stop the threat. Complete each wave within the given time to save the planet. Are you ready to add up to the challenge?",
    webSiteLink: "https://limbustarwar.netlify.app/",
    imgLink: require("../../Uploads/starwar.jpg"),
    backgroundColor: "#231F20",
  },
  {
    title: "Event Finder",
    subTitle:
      "Discover global events and stay updated! Subscribe to our newsletter for exclusive booking opportunities.",
    description:
      "Your go-to platform for discovering a wide array of events happening around the world. From concerts and festivals to conferences and exhibitions, stay informed about the latest happenings. Subscribe to our newsletter for exclusive booking opportunities and never miss out on an exciting event again",
    webSiteLink: "https://github.com/pabin-limbu/eventApp",
    imgLink: require("../../Uploads/event.jpg"),
    backgroundColor: "#0A0A0A",
  },
];

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const cardSection = useRef(null);
  const [currentDate, setCurrentDate] = useState("");

  const aboutSec = useRef(null);
  const contactSec = useRef(null);

  useEffect(() => {
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    setCurrentDate(date);
  }, []);

  const nameArray = [
    "i",
    "n",
    " ",
    "t",
    "o",
    " ",
    "e",
    "x",
    "p",
    "e",
    "r",
    "i",
    "e",
    "n",
    "c",
    "e",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    if (cardSection.current) {
      setHeight(isVisible ? cardSection.current.scrollHeight : 0);
    }
  }, [isVisible]);

  const handleScroll = () => {
    cardSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (value) => {
    console.log(value);
    if (value === "about") {
      aboutSec.current?.scrollIntoView({ behavior: "smooth" });
    } else if (value === "project") {
      cardSection.current?.scrollIntoView({ behavior: "smooth" });
    } else if (value === "contact") {
      contactSec.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="loader-logo">
        <Logo />
      </div>

      <div className="container home-page">
        <div
          className="typography-zone"
          style={{
            backgroundImage: `url(${computerImage})`,
            backgroundSize: "cover",
            height: "550px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Sidebar handleNavClick={handleNavClick} />
          <h1>
            <span className={`${letterClass}`}>T</span>
            <span className={`${letterClass} _11`}>U</span>
            <span className={`${letterClass} _12`}>R</span>
            <span className={`${letterClass} _13`}>N</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>M</span>
            <span className={`${letterClass} _16`}>A</span>
            <span className={`${letterClass} _17`}>G</span>
            <span className={`${letterClass} _18`}>I</span>
            <span className={`${letterClass} _19`}>N</span>
            <span className={`${letterClass} _20`}>A</span>
            <span className={`${letterClass} _21`}>T</span>
            <span className={`${letterClass} _22`}>I</span>
            <span className={`${letterClass} _23`}>O</span>
            <span className={`${letterClass} _24`}>N</span>

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={25}
            />
          </h1>
          <h2>
            Fullstack developer / Javascript / React / Next / React-native
          </h2>
        </div>
        <div ref={aboutSec} className="quote-container">
          <p className="currentDate">{currentDate}</p>
          <p>
            Hi, i am a Full Stack Developer exploring Cloud Native Technologies
            and Framework to build and deliver high-quality quality robust,
            reliable and scalable solutions. Looking for new opportunities.
          </p>
          <p className="myName">Pabin Limbu</p>
        </div>

        <motion.div ref={cardSection}>
          <div className="projectTitle-container">
            <h2 className="myProject">My Projects</h2>
          </div>
          {projectsRecent.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isVisible ? height : 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.5 }}
          >
            {projectsOther.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </motion.div>
          <div className="btn-viewmore-container">
            <button
              className="btn-viewmore"
              onClick={() => {
                setIsVisible(!isVisible);
                if (isVisible) {
                  handleScroll();
                }
              }}
            >
              {!isVisible ? "view more" : "view less"}
              {!isVisible ? <FaArrowDown /> : <FaArrowUp />}
            </button>
          </div>
        </motion.div>

        <div ref={contactSec} className="contact-container">
          <Contact />
        </div>

        <div className="social-container">
          <h1>Connect with me</h1>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/changsu.pabin"
                rel="noreferrer"
              >
                <FaFacebookSquare color="black" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pabin-limbu-b47ab4212"
                rel="noreferrer"
              >
                <FaLinkedin color="black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
