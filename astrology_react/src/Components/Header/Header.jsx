import React from "react";
import "./Header.css";
import { images } from "../../constants";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Header = () => {
  const testimonials = [
    {
      h1: "What's Your Sign ?",
      h2: "Read Your Daily",
      h3: "Horoscope Today",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur atque molestiae quo totam eos ipsum rerum quasi est fuga.",
    },
    {
      h1: "Trust our Experience",
      h2: "Start Control of your",
      h3: "Proffessional Destiny",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates maiores cumque accusantium modi placeat aut, natus quos culpa ex ratione?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = testimonials[currentIndex];

  return (
    <div className="header">
      <div className="header_content">
        <div className="left_head">
          <h3>{currentItem.h1}</h3>
          <h1>{currentItem.h2}</h1>
          <h1>{currentItem.h3}</h1>
          <p>{currentItem.p}</p>
          <span id="Appointment">Appointment</span>
          <div>
            <button onClick={handlePrevClick}><HiChevronLeft /></button>
            <button onClick={handleNextClick}><HiChevronRight /></button>
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
