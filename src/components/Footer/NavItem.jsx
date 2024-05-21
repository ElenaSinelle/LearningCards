import React from "react";
import PlainLink from "../Link/PlainLink";

export default function NavItem(props) {
  const { href, contents } = props;
  return (
    <li className="navLink">
      <PlainLink href={href} contents={contents} />
    </li>
  );
}
