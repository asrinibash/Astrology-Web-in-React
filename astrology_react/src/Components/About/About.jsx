import React from "react";
import images from "../../constants/images";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About Astrology</h1>
        <span>
          <img src={images.underline} alt="" />
        </span>
        <p >
          It is a long established fact that a reader will be distracted by the
          readable content of a  </p>
          <p>
            page when looking at its layout. The point of using Lorem Ipsum .
          </p>
       
        <div className="content">
          <div className="left_img">
            <img src={images.about} alt="" />
          </div>
          <div className="right_info">
            <div id="div_con">
              <h1>What Do We Do ?</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
             <br />
             <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>

              <div className="con_exp">
                <span id="sp_img"><img src={images.about_exp} alt="pic" /></span>
                <h2 id="thirty">30</h2>
                <div id="exp_con">
                <h5>years of</h5>
                <h2>Experience</h2>
                </div>
                
              </div>
              <span id="read_btn">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
