import React from "react";

import SwapiService from "../../services/swapi-service";

import { withDetailItemsData } from "../hoc-helpers/with-detail-items-data";

import ItemDetails from "../ItemDetails";

const swapiService = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

const PersonDetails = withDetailItemsData(
  ItemDetails,
  getPerson,
  getPersonImage
);
const PlanetDetails = withDetailItemsData(
  ItemDetails,
  getPlanet,
  getPlanetImage
);
const StarshipDetails = withDetailItemsData(
  ItemDetails,
  getStarship,
  getStarshipImage
);

export { PersonDetails, PlanetDetails, StarshipDetails };
