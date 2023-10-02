import React, { useState } from "react";
import hamburgerInactive from "../assets/images/icon-hamburger.svg";
import hamburgerActive from "../assets/images/icon-close-menu.svg";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <section className="navbar">
      <nav className="flex px-20 py-6 items-center justify-between">
        <div className="nav-logo">
          <h3>crowdfund</h3>
        </div>
        <div className="nav-menu hidden md:block">
          <ul className="flex space-x-10">
            <li className="text-base">About</li>
            <li className="text-base">
              <a href="index.html" title="referral-program">
                Discover
              </a>
            </li>
            <li className="text-base">
              <a href="foxx.html" title="email automation">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`mobile-nav ${isMobileNavVisible ? "hidden" : ""}`}>
        <button className="mobile-nav-close absolute top-10 right-10">
          <img
            src={isMobileNavVisible ? hamburgerInactive : hamburgerActive}
            alt=""
            onClick={toggleMobileNav}
          />
        </button>
        <ul className="space-y-10 text-2xl">
          <li>
            <a href="#" title="liana">
              About
            </a>
          </li>
          <li>
            <a href="#" title="referral program">
              Discover
            </a>
          </li>
          <li>
            <a href="foxx.html" title="email automation">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
