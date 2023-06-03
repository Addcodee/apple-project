import React from "react";
import "./ProductList.css";
import homepod from "../../assets/homepod.jpg";
import watch from "../../assets/iwatch.jpg";
import ipad from "../../assets/ipad.jpg";
import macbook from "../../assets/macbook.jpg";
import card from "../../assets/apple-card.jpg";
import phone from "../../assets/iphone-trade.jpg";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const productList = [
    {
      id: 1,
      img: phone,
      title: "Trade In",
      desc: "Upgrade and save. It's that easy.",
      btn1: "See what your device is worth",
      color: "white",
    },
    {
      id: 2,
      img: watch,
      title: "Watch",
      desc: "Pride is in the air.",
      btn1: "Shop the new Pride Edition Sport Band",
      color: "black",
    },
    {
      id: 3,
      img: ipad,
      title: "iPad Pro",
      desc: "Supercharged by M12",
      btn1: "Learn more",
      btn2: "Buy now",
      color: "white",
    },
    {
      id: 4,
      img: macbook,
      title: "MacBook Pro",
      desc: "Supercharged by M2 Pro and M2 Max",
      btn1: "Learn more",
      btn2: "Buy now",
      color: "black",
    },
    {
      id: 5,
      img: homepod,
      title: "HomePod",
      desc: "Profound sound",
      btn1: "Learn more",
      btn2: "Buy now",
      color: "white",
    },
    {
      id: 6,
      img: card,
      title: "Card",
      desc: "Get up to 3% Daily Cash back with every purchase",
      btn1: "Learn more",
      btn2: "Apply now",
      color: "black",
    },
  ];
  return (
    <div className="productList">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
