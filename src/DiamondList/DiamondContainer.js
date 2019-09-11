import React, { Component } from "react";
import DiamondCard from "./DiamondCard";
export default class DiamondContainer extends Component {
  loadDiamondCards = props => {
    return this.props.diamonds.map(diamond => {
      return <DiamondCard diamond={diamond} />;
    });
  };

  render() {
    return (
      <div id="diamond-list" className="diamond-container">
        {this.loadDiamondCards()}
      </div>
    );
  }
}
