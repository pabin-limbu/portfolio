import React, { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../UItemplate/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import "./index.scss";
import Loader from "react-loaders";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strArray = ["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"];
  const refForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(refForm.curren);
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
              strArray={strArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <div className="map-wrap">
            <MapContainer center={[22.304008, 114.168663]} zoom={20}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[22.304008, 114.168663]}>
                <Popup>Pabin location</Popup>
              </Marker>
            </MapContainer>
            <div className="info-map">
              pabin limbu,
              <br />
              Hong kong
              <br />
              kwun chung street,
              <span>changsu.pabin337@gmail.com</span>
            </div>
          </div>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <legend>Send Email</legend>
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
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="subject"
                    required
                  ></textarea>
                </li>

                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* <div className="info-map">
          pabin limbu,
          <br />
          Hong kong
          <br />
          kwun chung street,
          <span>changsu.pabin337@gmail.com</span>
        </div> */}
        {/* 
        <div className="map-wrap">
          <MapContainer center={[22.304008, 114.168663]} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.304008, 114.168663]}>
              <Popup>Pabin location</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="line-scale" />
    </>
  );
}

export default Contact;
