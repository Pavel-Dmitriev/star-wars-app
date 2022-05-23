import React from "react";
import SwapiService from "../../services/swapi-service";

import { withListItemsData } from "../hoc-helpers/with-list-items-data";

import ItemList from "../ItemList";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>{`${name} (${model})`}</span>
);

const PersonList = withListItemsData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const PlanetList = withListItemsData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const StarshipList = withListItemsData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
