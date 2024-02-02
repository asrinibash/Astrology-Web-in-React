import React from "react";
import { Link } from "react-router-dom";

const Components = () => {
  return (
    <div>
      <Link to="/">{<Header />}</Link>
      <Link to="/about">{<About />}</Link>
      <Link to="/pages">{<Horoscope />}</Link>
      <Link to="/shop">{<Ourservice />}</Link>
      <Link to="/blog">{<WhyChoseUs />}</Link>
      <Link to="/">{<Feedback />}</Link>
      <Link to="/contact">{<Footer />}</Link>
    </div>
  );
};

export default MyComponent;
