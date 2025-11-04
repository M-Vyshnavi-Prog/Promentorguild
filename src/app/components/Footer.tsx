"use client";
import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebookF, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.section}>
          <h3>About Us</h3>
          <ul>
            <li><a href="/the-team">The Team</a></li>
            <li><a href="/company">Company</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Explore</h4>
          <ul>
            <li><a href="/Contact-Us">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/interior-design-blog">Interior Design Blog</a></li>
            <li><a href="/designer-portfolio">Designer Portfolio</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Location</h4>
          <p>Dubai</p>
          <p>Bangalore</p>
          <p>© {new Date().getFullYear()} Pro Mentor Guild. All rights reserved.</p>
        </div>

        {/* ✅ NEW SECTION ADDED BELOW — NO EXISTING CODE MODIFIED */}
        <div className={styles.section}>
          <h4>Connect With Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/promentor_guild?igsh=aGtvZHFyYnE5Y3Vm" target="_blank"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>
        {/* ✅ END OF NEW SECTION */}
      </div>
    </footer>
  );
};

export default Footer;
