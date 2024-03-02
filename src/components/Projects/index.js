import React from "react";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import Loader from "react-loaders";
import { useEffect } from "react";
import CardProject from "./CardProject";
import starWarLogo from "../../Uploads/starwar.jpg";
import adminLogo from "../../Uploads/adminLogo.png";

import ecommerceLogo from "../../Uploads/ecommercelogo.png";
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
      projectName: "Ecommerce client",
      description: "Ecommerce client project 2023",
      features: [
        "CRUD operation",
        "MONGO DB",
        "NEXT.JS",
        "STYLED COMPONENT",
        "STRIPE PAYEMNT GATEWAY",
      ],
      img: ecommerceLogo,
      siteLikn: "https://nextecommerce-front.vercel.app/",
    },
    {
      projectName: "Ecommerce ADMIN",
      description: "Ecommerce ADMIN project 2023",
      features: [
        "CRUD operation",
        "MONGO DB",
        "ADD EDIT DELETE ITEM",
        "NEXT AUTH AUTHENTICATION",
        "TAILWIND CSS",
      ],
      img: adminLogo,
      siteLikn: "https://nextecommerce-admin.vercel.app/",
    },
    {
      projectName: "Star wars",
      description: "A simple game stop the alien invasion",
      features: [
        "CALCULATE USER PICKED NUMBER",
        "TRACK USER SELECTION",
        "COUNTDOWN",
        "REACT",
        "reSPONSIVE DESIGN",
      ],
      img: starWarLogo,
      siteLikn: "https://limbustarwar.netlify.app/",
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
          <p>All this projects are for my practice project.</p>
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
