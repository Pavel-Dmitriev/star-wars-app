import React from "react";

import { ErrorButton } from "../ErrorButton";

import "./style.css";

const ItemDetails = (props) => {
  const { item, image, children } = props;
  const { name } = item;

  if (!item) {
    return <span>Select a item from a list</span>;
  }

  return (
    <div className="item-details card">
      <img className="item-image" src={image} alt="item" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
        <ErrorButton />
      </div>
    </div>
  );
};

export default ItemDetails;
