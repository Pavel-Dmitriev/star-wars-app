import React from "react";

import ItemList from "../ItemList";

import compose from "../hoc-helpers/compose";
import withChildFunction from "../hoc-helpers/withChildFunction";
import { withListItemsData } from "../hoc-helpers/with-list-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

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

const PersonList = compose(
  withSwapiService(mapPersonMetodsToProps),
  withListItemsData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMetodsToProps),
  withListItemsData,
  withChildFunction(renderName)
)(ItemList);
const StarshipList = compose(
  withSwapiService(mapStarshipMetodsToProps),
  withListItemsData,
  withChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
