import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";
import Loader from "react-loaders";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["p", "a", "b", "i", "n", "  ", "l", "i", "m", "b", "u"];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="typography-zone">
          <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>E</span>
            <span className={`${letterClass} _13`}>L</span>
            <span className={`${letterClass} _14`}>L</span>
            <span className={`${letterClass} _15`}>O</span>
            <br />
            <span className={`${letterClass} _16`}>I</span>
            <span className={`${letterClass} _17`}>'M</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
          </h1>
          <h2>
            Frontend developer / Backend developer / Javascript / React /
            React-native
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div className="social-link">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/changsu.pabin"
                rel="noreferrer"
              >
                <FaFacebookSquare color="white" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pabin-limbu-b47ab4212"
                rel="noreferrer"
              >
                <FaLinkedin color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="loader-logo">
        <Logo />
      </div>
    </>
  );
}

export default Home;
