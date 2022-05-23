import React from "react";
import SwapiService from "../../services/swapi-service";

import { withListItemsData } from "../hoc-helpers/with-list-items-data";

import ItemList from "../ItemList";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = withListItemsData(ItemList, getAllPeople);
const PlanetList = withListItemsData(ItemList, getAllPlanets);
const StarshipList = withListItemsData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
