import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const Navigate = useNavigate();
  const [{ Cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({Cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox"></input> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(Cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button onClick={(e) => Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
