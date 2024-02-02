import React from "react";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="sign_upper">
          <h1>Zodiac Sign Finder</h1>
          <div className="dropdown_list">
            <div>1</div>
            <div>1</div>
            <div>1994</div>
            <div id="btn">Submit</div>
          </div>
        </div>
        <hr />
        <div className="info_low">
          <div className="card">
            <div class="as_footer_widget">
              <div class="as_footer_logo">
                <a href="index.html">
                  <img src={images.logo_white} alt="" />
                </a>
              </div>
              <p>There are many variations of this passages of Lorem Ipsum.</p>

              <ul class="as_contact_list">
                <li>
                  <p>NY 10018, California, USA</p>
                </li>
                <li>
                  <p>
                    <a href="Call:;">+ (91) 1800-124-105</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="email:;">astrology@example.com</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div class="as_footer_widget">
              <h3 class="as_footer_heading">Quick Links</h3>

              <ul>
                <li>
                  <a href="about.html"> About Us</a>
                </li>
                <li>
                  <a href="blog.html"> Blog</a>
                </li>
                <li>
                  <a href="astrologer.html"> Astrologers</a>
                </li>
                <li>
                  <a href="appointment.html"> Appointment</a>
                </li>
                <li>
                  <a href="contact.html"> Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div class="as_footer_widget">
              <h3 class="as_footer_heading">Horoscope Forecasts</h3>

              <ul>
                <li>
                  <a href="service_single.html"> My Daily Horoscope</a>
                </li>
                <li>
                  <a href="service_single.html"> My Weekly Horoscope</a>
                </li>
                <li>
                  <a href="service_single.html"> My Monthly Horoscope</a>
                </li>
                <li>
                  <a href="service_single.html"> My Love Horoscope</a>
                </li>
                <li>
                  <a href="service_single.html"> My Career Horoscop</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="as_footer_widget">
                <h3 class="as_footer_heading">Our Newsletter</h3>

                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit,sed
                  eiusmod tempor.{" "}
                </p>

                <div class="as_newsletter_wrapper">
                  <div class="as_newsletter_box">
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-control"
                      placeholder="Email..."
                    />
                    <a href="email:;" class="as_btn">
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>

                <div class="as_login_data">
                  <label>
                    I agree that my submitted data is being collected and
                    stored.
                    {/* <input type="checkbox" name="as_remember_me" value="" /> */}
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <hr />
          <h3>Copyright © 2022 Astrology. All Right Reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
