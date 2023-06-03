import React from "react";
import {
  ACCOUNT,
  APPLE,
  BUSINESS,
  EDUCATION,
  ENTERTAINMENT,
  GOVERNMENT,
  HEALTH,
  SHOP,
  STORE,
  VALUES,
  WALLET,
} from "../../containers/footer/variables";
import "./FooterLinks.css";
import FooterLinkColumn from "./FooterLinkColumn";
import { AiOutlinePlus } from "react-icons/ai";

const FooterLinks = () => {
  return (
    <div className="footer__links">
      <div className="footer__column">
        <div>
          <span>Shop and Learn</span>
          {SHOP.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
        <div>
          <span>Apple Wallet</span>
          {WALLET.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
      </div>
      <div className="footer__column">
        <div>
          <span>Account</span>
          {ACCOUNT.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
        <div>
          <span>Entertainment</span>
          {ENTERTAINMENT.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
      </div>
      <div className="footer__column">
        <div>
          <span>Apple Store</span>
          {STORE.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
      </div>
      <div className="footer__column">
        <div>
          <span>For Business</span>
          {BUSINESS.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
        <div>
          <span>For Education</span>
          {EDUCATION.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
        <div>
          <span>For Healthcare</span>
          {HEALTH.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
        <div>
          <span>For Government</span>
          {GOVERNMENT.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
      </div>
      <div className="footer__column">
        <div>
          <span>Apple Values</span>
          {VALUES.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
        <div>
          <span>About Apple</span>
          {APPLE.map((link) => (
            <FooterLinkColumn key={link.id} link={link} />
          ))}
        </div>
      </div>
      <div className="footer__directory-column">
        <span>Shop and Learn</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>Apple Wallet</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>Account</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>Entertainment</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>Apple Store</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>For Business</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>For Education</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>For Healthcare</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>For Government</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>Apple Values</span>
        <AiOutlinePlus />
      </div>
      <div className="footer__directory-column">
        <span>About Apple</span>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default FooterLinks;
