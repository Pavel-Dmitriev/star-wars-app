import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import { withDetailItemsData } from "../hoc-helpers/with-detail-items-data";

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

const { getPerson, getPersonImage } = new SwapiService();
export default withDetailItemsData(ItemDetails, getPerson, getPersonImage);
