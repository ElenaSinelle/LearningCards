import React from "react";
import "../../styles/header.css";
import Logo from "../Logo/Logo";
import PlainLink from "../Link/PlainLink";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header container">
        <Logo />
        <div className="headerLogins">
          <div className="headerLink">
            {" "}
            <PlainLink href="./." contents="Log In" />
          </div>
          <div className="headerLink">
            {" "}
            <PlainLink href="./." contents="Sign Up" />
          </div>
        </div>
      </header>
    );
  }
}
