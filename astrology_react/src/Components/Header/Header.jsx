import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Header.css";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
          <div className="left_head">
            <h3>What's Your Sign ?</h3>
            <h1>Read Your Daily </h1>
            <h1> Horoscope Today</h1>
            <div className="left_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam consectetur atque molestiae quo totam eos ipsum rerum
                quasi est fuga.
              </p>
            </div>

            <div className="left_content_btn">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </div>
       
        <div className="right_head">
          <img className="parent_image" src={images.hand_bg} alt="" />
          <img className="child_image" src={images.hand} alt="" />
        </div>
         </div>
      </div>
  );
};

export default Header;
