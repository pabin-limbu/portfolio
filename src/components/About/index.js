import React, { useEffect, useState } from "react";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import Loader from "react-loaders";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strArray = ["a", "b", "o", "u", "t", " ", "m", "e"];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
          </h1>

          <p>
            Aspiring Full Stack Developer exploring Cloud Native Technologies
            and Framework to build and deliver high quality robust, reliable and
            scalable solutions.
          </p>
          <br />
          <p>Actively looking for opportunity for front end web development.</p>
        </div>
        <div className="stage-cube-container">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#6cc24a" />
            </div>
            <div className="face2">
              {" "}
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              {" "}
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face4">
              {" "}
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFDA1D" />
            </div>
            <div className="face6">
              {" "}
              <FontAwesomeIcon icon={faReact} color="#5Ed4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  );
}

export default About;
