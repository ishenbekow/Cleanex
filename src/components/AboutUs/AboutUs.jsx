import React from "./AboutUs.css";
import Vector from "../../assets/Vector (2).svg";
import rec8 from "../../assets/Rectangle 8.png";
import rec9 from "../../assets/Rectangle 9.png";
import rec10 from "../../assets/Rectangle 10.png";
import rec11 from "../../assets/Rectangle 11.png";

//rafce

const AboutUs = () => {
  return (
    <div className="container about-flex">
      <div className="about-text">
        <h3 className="common-title">ABOUT US</h3>
        <h2 className="about-title">
          QUICKLY AND EASY TO CLEAN YOUR OFFICE AND HOUSE
        </h2>
        <p className="about-p">
          Amet minim mollit non deserunt ullamco sit aliqua dolor do consequat
          sunt nostrud amet. Amet minim mollit non deserunt ullamco aliqua dolo
          ame.
        </p>
        <h5 className="about-h5">
          AWARD WINNING COMPANY <img src={Vector} alt="" />
        </h5>
        <p className="about-p">
          Amet minim mollit non sit aliqua dolor do consequat sunt nostrud amet.
          Amet mollit ullamco aliqua dolo ame.{" "}
        </p>
        <button className="about-btn">Our Services</button>
      </div>
      <div className="about-images">
        <div className="img-left">
          <div className="img-big">
            <img src={rec8} alt="" />
          </div>
          <div className="img-small">
            <img src={rec10} alt="" />
          </div>
        </div>
        <div className="img-right">
          <div className="img-small">
            <img src={rec9} alt="" />
          </div>
          <div className="img-big">
            <img src={rec11} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


