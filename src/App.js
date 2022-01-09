import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KFNT9HWLdtSgHm1bcsCK74LVfucInHyL9JFflFe7Ox0VRoenQfoa7Myl1u9YHVEzZ1oNB1p9hj7Z4RMaxYURrD900tCGkXR3G"
);
function App() {
  const [{}, dispatch] = useStateValue();

  //data layer component connected with the firebase
  useEffect(() => {
    //will only pragma once when the app comp loads... [] like a dynamic if statement
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user just logged in
        // everytime the user login , it will shoot the user into the data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
        {/* Home */}
      </div>
    </BrowserRouter>
  );
}

export default App;
