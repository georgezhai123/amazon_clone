import React from "react";
import "./Home.css";
import Product from "./Product";
import biubiu from "./biubiu.jpg";
import timemachine from "./time_machine.jpg";
import pork from "./pork.jpg";
import swim from "./swim.jpg";
import feast from "./feast.jpg";
import teleporter from "./teleporter.jpg";

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
            id={8012020}
            title="George homemade braised pork in the brown sauce"
            price={150.59}
            image={pork}
            rating={5}
          />
          <Product
            id={8012021}
            title="George's exclusive swim lesson"
            price={2200.0}
            image={swim}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={30002021}
            title="Teleporter 3000: Teleport to whereever you want"
            price={9.99}
            image={teleporter}
            rating={1}
          />
          <Product
            id={112020}
            title="满汉全席"
            price={1999.99}
            image={feast}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={20223022}
            title="Time machine to 3022"
            price={199.99}
            image={timemachine}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
