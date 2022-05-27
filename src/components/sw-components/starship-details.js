import React from "react";

import withDetailItemsData from "../hoc-helpers/with-detail-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemDetails from "../ItemDetails";

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

const StarshipDetails = withSwapiService(
  withDetailItemsData(ItemDetails),
  mapMethodsToProps
);

export default StarshipDetails;
