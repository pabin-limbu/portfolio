import React from "react";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import Loader from "react-loaders";
import { useEffect } from "react";
import CardProject from "./CardProject";
import starWarLogo from "../../Uploads/starwar.jpg";
import madiraImage from "../../Uploads/madira.jpg";
function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [selected, setSelected] = useState(0);

  const strArray = ["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"];
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const toggle = (i) => {
    console.log("printing");
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      projectName: "midnight madira",
      description: "ecommerce project developed for ab company",
      features: ["feature 1", "featire 2", "feature 3"],
      img: madiraImage,
      siteLikn: "https://www.linkedin.com/in/pabin-limbu-b47ab4212",
    },
    {
      projectName: "Star wars",
      description: "abcd",
      features: ["feature 1", "featire 2", "feature 3"],
      img: starWarLogo,
      siteLikn: "https://limbustarwar.netlify.app/",
    },
    {
      projectName: "todo final",
      description: "abcd",
      features: ["feature 1", "featire 2", "feature 3"],
      img: "../../../Uploads/starwar.png",
      siteLikn: "https://www.linkedin.com/in/pabin-limbu-b47ab4212",
    },
    {
      projectName: "course link",
      description: "abcd",
      features: ["feature 1", "featire 2", "feature 3"],
      img: "../../../Uploads/starwar.png",
      siteLikn: "https://www.linkedin.com/in/pabin-limbu-b47ab4212",
    },
  ];

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
          </h1>
          <p>
        All this projects are for my practice project.
          </p>
        </div>

        <div className="wrapper">
          <div className="accordian">
            {data.map((item, i) => {
              return (
                <CardProject
                  key={i}
                  index={i}
                  toggle={toggle}
                  selected={selected}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  );
}

export default Projects;
{
  /* <div className="item" key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {item.answer}
                  </div>
                </div> */
}
