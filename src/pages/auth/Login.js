import React from "react";
import { Button } from "@mui/material";

import "./index.scss";

import { auth, provider } from "../../firebase";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({ type: actionTypes.SET_USER, user: res.user });
        localStorage.setItem("username", res.user.displayName);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://jobaxle.com/uploads/company/logo/5d77bb305f0ceac12eac4316816546e3.png" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
