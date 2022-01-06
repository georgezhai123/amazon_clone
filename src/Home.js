import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/614uc71KkKL._SX3000_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id="08012021"
            title="Biubiu: the British long hair"
            price={19.99}
            image="http://fluffysweetie.com/skin/style/images/a2.jpg"
            rating={5}
          />
          <Product
            title="Biubiu: the British long hair"
            price={19.99}
            image="http://fluffysweetie.com/skin/style/images/a2.jpg"
            rating={5}
          />
          <Product
            title="Biubiu: the British long hair"
            price={19.99}
            image="http://fluffysweetie.com/skin/style/images/a2.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Biubiu: the British long hair"
            price={19.99}
            image="http://fluffysweetie.com/skin/style/images/a2.jpg"
            rating={5}
          />
          <Product
            title="Biubiu: the British long hair"
            price={19.99}
            image="http://fluffysweetie.com/skin/style/images/a2.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Biubiu: the British long hair"
            price={19.99}
            image="http://fluffysweetie.com/skin/style/images/a2.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
