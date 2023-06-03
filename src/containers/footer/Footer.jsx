import React from "react";
import "./Footer.css";
import { NOTES } from "./variables";
import FooterLinks from "../../components/Footer/FooterLinks";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__notes">
          {NOTES.map((note) => (
            <p key={note.id}>{note.paragraph}</p>
          ))}
        </div>
        <div className="footer__underline"></div>
        <FooterLinks />
        <div className="footer__rules">
          <p>
            More ways to shop: <span>Find an Apple Store</span> or{" "}
            <span>other retailer</span> near you. Or call
            1-800-MY-APPLE.
          </p>
          <div className="footer__underline"></div>
          <div>
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            <ul>
              <li>Privacy Police</li>|<li>Terms of Use</li>|
              <li>Sales and Refunds</li>|<li>Legal</li>|
              <li>Site Map</li>
            </ul>
            <p id="footer__rules_country">Kyrgyzstan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
