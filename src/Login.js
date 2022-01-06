import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        Navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const create_account = (e) => {
    e.preventDefault();
    //fancy firebase create
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succeesully created
        console.log(auth);
        if (auth) {
          Navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_log.svg.png"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email address</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" onClick={signIn} className="login_button">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the FAKE AMAZON Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={create_account} className="login_create_acc">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
