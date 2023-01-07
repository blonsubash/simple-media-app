import React from "react";
import "./index.scss";
import logoIcon from "../../assets/images/logo.png";
import { Avatar, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logoIcon} />
      </div>

      <div className="'header__middle"></div>

      <div className="header__right">
        <div className="header__profile-info">
          <Avatar />
          <h4>user name</h4>
        </div>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
