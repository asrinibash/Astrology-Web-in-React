import React from "react";
import "./Navbar.css";
import { images } from "../../constants";
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="upper">
        <div className="row">
          <div className="left-info">
            <span>
              {" "}
              <a href="">+1800 326 3264</a>
            </span>
            <span>
              {" "}
              <a href="">support@website.com</a>
            </span>
          </div>
          <div className="right_search">
            <input
              className="input_search"
              type="text"
              placeholder="Search..."
            />

            <div id="profile_pic">
              <a href="X">
                <img src={images.profile} alt="P" />
                {/* <span className="add_user">+</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lower">
        <div className="lower_row">
          <div className="nav_logo">
            <img src={images.logo} alt="" />
          </div>
          <div class="as_menu">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/about">about us</a>
              </li>
              <li>
                <a href="/pages">pages</a>
                {/* <ul class="as_submenu">
                    <li>
                      <a href="service.html">service</a>
                    </li>
                    <li>
                      <a href="service_single.html">service single</a>
                    </li>
                    <li>
                      <a href="appointments.html">appointment</a>
                    </li>
                    <li>
                      <a href="pricing.html">pricing plans</a>
                    </li>
                    <li>
                      <a href="error.html">404</a>
                    </li>
                  </ul> */}
              </li>
              <li>
                <a href="/shop">shop</a>
                {/* <ul class="as_submenu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop_single.html">Shop Single</a>
                    </li>
                  </ul> */}
              </li>
              <li>
                <a href="/blog">blog</a>
                {/* <ul class="as_submenu">
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="blog_single.html">blog single</a>
                    </li>
                  </ul> */}
              </li>
              <li>
                <a href="/contact">contact</a>
              </li>

              <li>
                {" "}
                <a href="javascript:;" class="as_wishlist">
                  <img src={images.wishlist} alt="" />
                </a>
              </li>
              <li>
                <span>
                  <img src={images.cart} alt="" />
                  {/* <span class="as_cartnumber">02</span> */}
                </span>
              </li>
              {/* <li id="menu">
              <i class="ri-menu-line"></i>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
