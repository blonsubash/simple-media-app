import React from "react";
import "./index.scss";
import logoIcon from "../../assets/images/logo.png";
import { Avatar, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useStateValue } from "../../context/StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  console.log("user", user);
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://jobaxle.com/uploads/company/logo/5d77bb305f0ceac12eac4316816546e3.png" />
      </div>

      <div className="'header__middle"></div>

      <div className="header__right">
        <div className="header__profile-info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
