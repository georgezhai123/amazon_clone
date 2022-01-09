const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const { response } = require("express");
const { default: Stripe } = require("stripe");
const stripe = require("stripe")(
  "sk_test_51KFNT9HWLdtSgHm1ginTDi1Xmlr86WdV64jWfZoZjrANeDIgfWmbdTaxRQDBiq8J7vZ3b0fHjaqwCi3mRfwcCvRa008fIC2SBh"
);

//API

//App Config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM! for this amount >>> ", total);
  const paymentIntent = await stripe.PaymentIntent.create({
    amount: total,
    currency: "usd",
  });
  //OK- Created
  //send the client_secret to the front-end
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//(http://127.0.0.1:5001/challenge-266d2/us-central1/api
