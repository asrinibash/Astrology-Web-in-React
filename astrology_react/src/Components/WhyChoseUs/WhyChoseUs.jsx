import React from "react";
import { images } from "../../constants";
import './WhyChoseUs.css'

const WhyChoseUs = () => {
  return (
    <div className="whychoseus">
      <div className="container">
          <h1>Why Choose Us</h1>
          <span>
            <img src={images.underline} alt="" />
          </span>
          <p id="p_content">
            Consectetur adipiscing elit, sed do eiusmod tempor
            incididuesdeentiut labore
          </p>
          <p>etesde dolore magna aliquapspendisse and the gravida.</p>
        <div className="pic_list">

          <div className="card">
            <span>
              <img src={images.choose} alt="" />
              <h1>100+</h1>
            </span>
            <h5>Trusted By Millions Clients</h5>
          </div>

          <div className="card">
            <span>
              <img src={images.choose} alt="" />
              <h1>30+</h1>
            </span>
            <h5>Years of Experience</h5>
          </div>

          <div className="card">
            <span>
              <img src={images.choose} alt="" />
              <h1>55+</h1>
            </span>
            <h5>Types of Horoscopes</h5>
          </div>

          <div className="card">
            <span>
              <img src={images.choose} alt="" />
              <h1>90+</h1>
            </span>
            <h5>Qualified Astrologers</h5>
          </div>

          <div className="card">
            <span>
              <img src={images.choose} alt="" />
              <h1>99+</h1>
            </span>
            <h5>Success Horoscope</h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
