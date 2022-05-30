import React from "react";

import { withListItemsData } from "../hoc-helpers/with-list-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemList from "../ItemList";

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>{`${name} (${model})`}</span>
);

const mapPersonMetodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const mapPlanetMetodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};
const mapStarshipMetodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(
  withListItemsData(withChildFunction(ItemList, renderName)),
  mapPersonMetodsToProps
);
const PlanetList = withSwapiService(
  withListItemsData(withChildFunction(ItemList, renderName)),
  mapPlanetMetodsToProps
);
const StarshipList = withSwapiService(
  withListItemsData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMetodsToProps
);

export { PersonList, PlanetList, StarshipList };
