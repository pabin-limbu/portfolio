import React from "react";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import Loader from "react-loaders";
import { useEffect } from "react";
import CardProject from "./CardProject";
import starWarLogo from "../../Uploads/starwar.jpg";
import adminLogo from "../../Uploads/foodMe.png";
import eventLogo from "../../Uploads/event.jpg";

import ecommerceLogo from "../../Uploads/Vl.png";
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
      projectName: "Vintage Lens",
      description: "Ecommerce shop",
      features: [
        "Buy variety of camera and Lenses",
        "View Details and Specifications of cameras",
        "View Stories",
        "Add to cart for checkout",
        "Frontend: Next.js , Styled Components",
        "Backend: Express.js , Axios, MongoDb",
        "Authentication: NextAuth ",
        "Payment Gateway: Stripe online payment",
      ],
      img: ecommerceLogo,
      siteLikn: "https://nextecommerce-front.vercel.app/",
    },
    {
      projectName: "Food Me",
      description: "Instant Food order",
      features: [
        "Search reastaurant by city.",
        "Login to save user details.",
        "Search restaurant by type of food. ",
        "Create your own restaurant.",
        "View status of food delevery",
        "Frontend : React.js, Tailwind CSS ",
        "Backend : Express.js and MongoDb database ",
      ],
      img: adminLogo,
      siteLikn: "https://react-sewa-frontend.onrender.com",
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
    {
      projectName: "View Events",
      description: "Event posts around the world",
      features: [
        "NEXT.JS PAGE ROUTER , REACT",
        "REGEX",
        "SASS CSS",
        "RESPONSIVE DESIGN",
      ],
      img: eventLogo,
      siteLikn: "https://eventapp-pabin-m782xfesg-pabin-limbu.vercel.app/",
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
