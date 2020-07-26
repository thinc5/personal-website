import React, { Fragment } from "react";

import styles from "./PortraitFrame.module.css"

interface Props {
  image_path: string;
  href: string;
}

export class PortraitFrame extends React.Component<Props> {
  constructor (image_path, href) {
    super({ image_path, href });
  }
  
  render () {
    return (
      <a href={this.props.href} className="test">
        <img src={this.props.image_path}  className={styles.circle_frame} />
      </a>
    );
  }
};
