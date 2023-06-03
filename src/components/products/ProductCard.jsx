import React from "react";
import "./ProductCard.css";

import { IoIosArrowForward } from "react-icons/io";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard__container">
      {product.color === "white" ? (
        <div className="productCard__title-white">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <div>
            <span>
              {product.btn1} <IoIosArrowForward />
            </span>
            {product.btn2 ? (
              <span>
                {product.btn2} <IoIosArrowForward />
              </span>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="productCard__title-black">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <div>
            <span>
              {product.btn1} <IoIosArrowForward />
            </span>
            {product.btn2 ? (
              <span>
                {product.btn2} <IoIosArrowForward />
              </span>
            ) : null}
          </div>
        </div>
      )}
      <img
        className="productCard__img"
        src={product.img}
        alt="error"
      />
    </div>
  );
};

export default ProductCard;
