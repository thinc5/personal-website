import React from "react";

interface Props {
    build_date: string;
}

/* A navigation bar with many useful links, present across all pages. */
export class Footer extends React.Component<Props> {
  render() {
    return (
      <footer>
          <p>Site last updated: {this.props.build_date}</p>
      </footer>
    );
  }
};

