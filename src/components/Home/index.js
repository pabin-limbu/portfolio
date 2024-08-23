import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import computerImage from "../../Uploads/computer.jpg";
import Sidebar from "../Sidebar";
import Contact from "../Contact";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const ref = useRef(null);
  const refTwo = useRef(null);
  const isInView = useInView(ref);
  const isInViewTwo = useInView(refTwo);

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
    console.log(isInView);
  }, [isInView]);

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
          <Sidebar />
          <h1>
            <span className={`${letterClass}`}>T</span>
            <span className={`${letterClass} _11`}>U</span>
            <span className={`${letterClass} _12`}>R</span>
            <span className={`${letterClass} _13`}>N</span>
            <br />
            <span className={`${letterClass} _14`}>E</span>
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

        <div className="quote-container">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quo natus praesentium unde dignissimos sapiente voluptatem tenetur
            deleniti vel voluptate?"
          </p>
        </div>

        <div className="recent-project-container">
          <div className="recent-project-wrapper">
            <motion.div className="project-image-container-one">
              <img
                className="img-foodme"
                src={require("../../Uploads/foodMe.png")}
                alt="foodme"
              />
            </motion.div>

            <motion.div
              className="card-foodme"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isInView ? 0 : 10, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Foodme</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                officiis architecto asperiores hic quaerat ratione molestias
                vitae velit dolor quia? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Esse officiis architecto asperiores hic
              </p>
            </motion.div>
          </div>
          <div className="spotter" ref={ref}></div>
          <div className="recent-project-wrapper">
            <motion.div className="project-image-container-two">
              <img
                className="img-vintagelens"
                src={require("../../Uploads/Vl.png")}
                alt=""
              />
            </motion.div>
            <motion.div
              className="card-vintagelens"
              initial={{ y: -30, opacity: 0 }}
              animate={{
                y: isInViewTwo ? 0 : 30,
                opacity: isInViewTwo ? 1 : 0,
              }}
              transition={{ duration: 0.7 }}
            >
              <h2>Vintage Lens</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                officiis architecto asperiores hic quaerat ratione molestias
                vitae velit dolor quia? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Esse officiis architecto asperiores hic
              </p>
            </motion.div>
          </div>
          <div className="spotterTwo" ref={refTwo}></div>
          <div className="">
            <p>More </p>
          </div>
        </div>

        <div className="contact-container">
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
