import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import emailjs from "@emailjs/browser";
import "./index.scss";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import { Marker, Popup } from "react-leaflet";
function TestContact() {
  const [letterClass, setLetterClass] = useState("text-animate"); //altering class after the initial animation. means changing the class name.
  const refForm = useRef();
  const position = [51.505, -0.09];

  useEffect(() => {
    //after the initial animation the class will be altered to  text-animation-hover.
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yc940xy",
        "template_8p9daew",
        refForm.current,
        "ccJ5Rnazt457OAhS0"
      )
      .then(
        () => {
          alert("message successfully sent !");
          window.location.reload(false);
        },
        () => {
          alert("failed to send message, please Try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis
            provident aperiam ea recusandae repudiandae rerum sint tenetur a
            labore.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li className="">
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          pabin limbu,
          <br />
          Hong kong
          <br />
          kwun chung street,
          <span>changsu.pabin337@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Pabin location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default TestContact;
