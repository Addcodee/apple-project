import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { SiApple } from "react-icons/si";
import { SlMagnifier } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import apple from "../../assets/apple-header.mp4";
import iphone from "../../assets/iphone-header.jpg";
const Header = () => {
  const [play, setPlay] = useState(false);

  const videoRef = useRef();

  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    playVideo();
  }, []);

  const switchPlayBtn = () => {
    if (play) {
      return (
        <AiOutlinePlayCircle
          onClick={() => {
            setPlay(false);
            playVideo();
          }}
          className="header__info_play-btn"
        />
      );
    } else {
      return (
        <AiOutlinePauseCircle
          onClick={() => {
            setPlay(true);
            playVideo();
          }}
          className="header__info_play-btn"
        />
      );
    }
  };

  //cta - is actually means 'Click To Action'
  return (
    <div className="header__container">
      <div className="header__navbar">
        <div className="header__navbar_container">
          <SiApple className="header__navbar_logo" />
          <ul className="header__navbar_list">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accesories</li>
            <li>Support</li>
          </ul>
          <div className="header__navbar_left-wrapper">
            <SlMagnifier className="header__navbar_mag-glass" />
            <IoBagOutline className="header__navbar_bag" />
            <HiOutlineMenuAlt4 className="header__navbar_menu" />
          </div>
        </div>
      </div>
      <div className="header__offer">
        <p className="header__offer_description">
          Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro
          when you trade in iPhone 11 or higher.
          <span>
            Shop iPhone
            <IoIosArrowForward />
          </span>
        </p>
      </div>
      <div className="header__info">
        <video
          ref={videoRef}
          className="header__info_video"
          src={apple}
          autoPlay
          loop
          muted
        ></video>
        {switchPlayBtn()}
        <div className="header__info_title">
          <h1>
            <SiApple /> WWDC23
          </h1>
          <p>Watch online Monday at 10:00 a.m. PT.</p>
          <span>Learn more</span>
        </div>
      </div>
      <div className="header__cta">
        <img className="header__cta_img" src={iphone} alt="" />
        <div className="header__cta_title">
          <h2>iPhone 11 Pro</h2>
          <p>Pro. Beyond.</p>
          <div>
            <span>Learn more</span>
            <span>Buy now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
