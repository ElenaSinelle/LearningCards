import React from "react";
import "../../styles/header.css";
import Logo from "../Logo/Logo";
import PlainLink from "../Link/PlainLink";
import Search from "../Inputs/Search";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container headerContainer">
          <Logo />
          <div className="headerLogins">
            <Search />

            <PlainLink href="./." contents="Log In" />

            <PlainLink href="./." contents="Sign Up" />
          </div>
        </div>
      </header>
    );
  }
}
