import React from "react";

import Link from "next/link";

import styles from "./HeaderLinks.module.css";

import { PortraitFrame } from "./PortraitFrame";

/* A navigation bar with many useful links, present across all pages. */
export class HeaderLinks extends React.Component {
  render() {
    return (
      <nav className={styles.header_list}>
        <PortraitFrame image_path="/gappy.png" href="https://www.youtube.com/watch?v=22uGtg9jQt0" />
        <a href="mailto:thinc360@gmail.com">Contact Me</a>
        <a href="https://github.com/thinc5">GitHub</a>
        <Link key={"resume"} href="/resume">
          <a>Resume</a>
        </Link>
      </nav>
    );
  }
};
