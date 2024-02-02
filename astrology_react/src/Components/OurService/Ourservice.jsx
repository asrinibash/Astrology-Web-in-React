import React from "react";
import { images } from "../../constants";

import "./Ourservice.css";

const cardData = [
  {
    h1: "Kundli Dosha",
    p: "Lorem ipsum dolor sit amet",
    h3: "Read More ->",
    pic: images.icon1,
    pic2: images.icon2,
    bg: images.service2,
  },
  {
    h1: "Kundli Dosha",
    p: "Lorem ipsum dolor sit amet",
    h3: "Read More ->",
    pic: images.icon1,
    pic2: images.icon2,
    bg: images.service2,
  },
  {
    h1: "Kundli Dosha",
    p: "Lorem ipsum dolor sit amet",
    h3: "Read More ->",
    pic: images.icon1,
    pic2: images.icon2,
    bg: images.service2,
  },
  {
    h1: "Kundli Dosha",
    p: "Lorem ipsum dolor sit amet",
    h3: "Read More ->",
    pic: images.icon1,
    pic2: images.icon2,
    bg: images.hand_bg,
  },
];

const Ourservice = () => {
  return (
    <div className="ourservice">
      <div className="container">
        <h1>Our Services</h1>
        <span>
          <img src={images.underline} alt="" />
        </span>
        <p id="p_content">
          Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut
          labore
        </p>
        <p>etesde dolore magna aliquapspendisse and the gravida.</p>

        <div className="main_content">
          <div className="left_img">
            <img id="spin_img" src={images.service2} alt="spin" />
            <span>
              <img id="bg_img" src={images.service1} alt="" />
              <img id="model_img" src={images.service3} alt="" />
            </span>
          </div>
          <div className="right_list">
            {cardData.map((card) => (
              <div className="card">
                <div>
                  <img src={card.pic} alt="" />
                  <img src={card.pic2} alt="" />
                </div>
                <h3>{card.h1}</h3>
                <p>{card.p}</p>
                <h5>{card.h3}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
