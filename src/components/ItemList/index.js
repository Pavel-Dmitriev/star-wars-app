import React from "react";

import SwapiService from "../../services/swapi-service";

import { withListItemsData } from "../hoc-helpers/with-list-items-data";

import "./style.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <div>{items}</div>;
};

const { getAllPeople } = new SwapiService();
export default withListItemsData(ItemList, getAllPeople);
