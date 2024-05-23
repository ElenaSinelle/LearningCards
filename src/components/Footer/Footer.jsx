import React from "react";
import Logo from "../Logo/Logo";
import PlayWare from "../../images/png/playwire.png";
import NavItem from "./NavItem";
import ImgLink from "../Link/ImgLink";
import PlainLink from "../Link/PlainLink";
import ButtonLink from "../Link/ButtonLink";
import "../../styles/footer.css";
import "../../styles/nav.css";

export default class Footer extends React.Component {
  render() {
    const navItems = [
      ["Home", "./."],
      ["Flashcards", "./."],
      ["About", "./."],
      ["FAQ", "./."],
      ["Terms of Service", "./."],
      ["Privacy Statement", "./."],
      ["Contact", "./."],
    ];

    return (
      <footer className="footer">
        <div className="container footerContainer">
          <Logo />

          <p className="copyRight">
            Copyright © 2001-2024 StudyStack LLC. All rights reserved.
          </p>

          <div className="line"></div>

          <nav>
            <ul>
              {navItems.map((item) => (
                <NavItem href={item[1]} contents={item[0]} />
              ))}
            </ul>
          </nav>

          <div class="footerBtns">
            <ButtonLink
              href="/"
              contentsAdd="Browse on Search"
              contents="millions of existing flashcards"
            />

            <ButtonLink
              href="/"
              contentsAdd="Create Flashcards"
              contents="plus a dozen other activities"
            />
          </div>

          <ImgLink
            className="playWare"
            href="https://www.playwire.com/contact-direct-sales"
            src={PlayWare}
            alt="PlayWare"
          />

          <PlainLink href="/" contents="Advertise on this site" />
        </div>
      </footer>
    );
  }
}
