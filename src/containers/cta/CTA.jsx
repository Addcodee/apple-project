import React from "react";
import "./CTA.css";
import iphones from "../../assets/iphones-cta.jpg";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "../../components/products/ProductCard";
import ProductList from "../../components/products/ProductList";

const CTA = () => {
  return (
    <div className="cta__container">
      <div className="cta__header">
        <div className="cta__header_title">
          <h2>iPhone 14</h2>
          <p>Wonderfull.</p>

          <div>
            <span>
              Learn more <IoIosArrowForward />
            </span>
            <span>
              Buy now <IoIosArrowForward />
            </span>
          </div>
        </div>
        <img className="cta__header_img" src={iphones} alt="error" />
      </div>
      <ProductList />
    </div>
  );
};

export default CTA;
