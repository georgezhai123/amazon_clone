import { ThemeContext } from "@emotion/react";
import { SliderValueLabel } from "@mui/material";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ Cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const Navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(""); //use clientsecret to charge customer
  const stringClientSecret = clientSecret.toString();

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in a currentcies subunits
        url: `/payments/create?total=${Math.round(getCartTotal(Cart) * 100)}`,
      });
      //update the special clientsecret whenever the Cart changes to allow us charge the customer at a new amount
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [Cart]);
  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);
  console.log(Cart);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(stringClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            Cart: Cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created, //create the timestamp for the order
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_CART",
        });
        Navigate("/orders", { replace: true });
      });
  };

  const handleChange = (e) => {
    //listen for changes in the cardElement
    //and display any errors as the customer enters their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{Cart?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>302 E John St</p>
            <p>Champaign, IL, 61820</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {Cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(Cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
