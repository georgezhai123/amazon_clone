import React from "react";
import "./Home.css";
import Product from "./Product";
import biubiu from "./biubiu.jpg";

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
            id={8012021}
            title="Biubiu: the British long hair"
            price={19.99}
            image={biubiu}
            rating={5}
          />
          <Product
            id={8012021}
            title="Biubiu: the British long hair"
            price={19.99}
            image={biubiu}
            rating={5}
          />
          <Product
            id={8012021}
            title="Biubiu: the British long hair"
            price={19.99}
            image={biubiu}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={8012021}
            title="Biubiu: the British long hair"
            price={19.99}
            image={biubiu}
            rating={5}
          />
          <Product
            id={8012021}
            title="Biubiu: the British long hair"
            price={19.99}
            image={biubiu}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={8012021}
            title="Biubiu: the British long hair"
            price={19.99}
            image={biubiu}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
