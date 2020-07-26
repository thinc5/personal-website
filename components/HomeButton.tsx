import React from "react";

import Link from "next/link";

export class HomeButton extends React.Component {
  render() {
    return (
      <div>
        <Link key={"home"} href="/" as={"/"}>
          <a>{"<- Home"}</a>
        </Link>
      </div>
    );
  }
};
