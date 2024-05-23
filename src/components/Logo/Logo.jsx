import React from "react";
import "../../styles/logo.css";
import logo from "../../images/icons/logo.svg";
import ImgLink from "../Links/ImgLink";

export default function Logo() {
  return <ImgLink className="logo" href="./." src={logo} alt="logo" />;
}
