import React from "react";
import "./Horoscope.css";
import { images } from "../../constants";

const cardData = [
  { m_title: "Aries", imageUrl: images.h1, date: "Mar 21 - Apr 19" },
  { m_title: "Taurus", imageUrl: images.h2, date: "Mar 21 - Apr 19" },
  { m_title: "Gemini", imageUrl: images.h3, date: "Mar 21 - Apr 19" },
  { m_title: "Cancer", imageUrl: images.h4, date: "Mar 21 - Apr 19" },
  { m_title: "Leo", imageUrl: images.h5, date: "Mar 21 - Apr 19" },
  { m_title: "Virgo", imageUrl: images.h6, date: "Mar 21 - Apr 19" },
  { m_title: "Libra", imageUrl: images.h7, date: "Mar 21 - Apr 19" },
  { m_title: "Scorpio", imageUrl: images.h8, date: "Mar 21 - Apr 19" },
  { m_title: "Sagittairus", imageUrl: images.h9, date: "Mar 21 - Apr 19" },
  { m_title: "Capricorn", imageUrl: images.h10, date: "Mar 21 - Apr 19" },
  { m_title: "Aquarius", imageUrl: images.h11, date: "Mar 21 - Apr 19" },
  { m_title: "Pisces", imageUrl: images.h12, date: "Mar 21 - Apr 19" },
];

const Horoscope = () => {
  return (
    <div className="Horoscope">
      <div className="container">
        <h1>Horoscope Forecasts</h1>
        <span><img src={images.underline} alt="" /></span>
        <p id="p_content">
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
        <p>page when looking at its layout. The point of using Lorem Ipsum .</p>

        <div className="card_list">
          {cardData.map((card) => (
            <div className="card">
              <div id="img_cov">
              <img src={card.imageUrl} alt={card.date} />
              </div>
              <h2>{card.m_title}</h2>
              <h5>{card.date}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
