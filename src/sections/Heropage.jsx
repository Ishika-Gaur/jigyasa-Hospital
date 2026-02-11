import React from "react";
import "./heropage.css";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserDoctor,
  faStethoscope,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";

const Heropage = () => {
  const images = [
    "📍-Jigyasa-हॉस्पिटल-रामपुर-रोड-मुरादाबाद-244001📞-फोन-0591-2490044-7536848000-1.png",
    "Front_image.png"
    // "राम-नवमी-की-शुभकामनाएं-1.png",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);
  return (
    <div className="heropage-conatiner">
      <header className="home-header">
        <img className="hero-image" src={images[index]} alt="Main Banner"></img>
      </header>
      <div className="card-grid">
        <ul className="card-list">
          <li className="card-item">
            <FontAwesomeIcon className="heropage-icon" icon={faCalendarDays} />
            <span>BOOK APPOINTMENT</span>
          </li>
          <li className="card-item">
            <FontAwesomeIcon className="heropage-icon" icon={faUserDoctor} />
            <span>BOOK A VIRTUAL CONSULTATION</span>
          </li>
          <li className="card-item">
            <FontAwesomeIcon className="heropage-icon" icon={faStethoscope} />
            <span>BOOK A TEST</span>
          </li>
          <li className="card-item">
            <FontAwesomeIcon className="heropage-icon" icon={faHeartPulse} />
            <span>HEALTH CHECKUP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heropage;
