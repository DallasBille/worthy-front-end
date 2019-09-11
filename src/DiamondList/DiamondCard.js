import React from "react";
const DiamondCard = props => {
  return (
    <div className="diamond-card">
      <p>{props.diamond.carat} Carat</p>
      <p>{props.diamond.cut} Cut</p>
      <p>
        {props.diamond.color}, {props.diamond.clarity}
      </p>
      <p className="sold-for">Sold For: ${props.diamond.sold}</p>
    </div>
  );
};

export default DiamondCard;
