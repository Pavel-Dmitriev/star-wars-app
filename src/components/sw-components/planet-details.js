import React from "react";

import withDetailItemsData from "../hoc-helpers/with-detail-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemDetails from "../ItemDetails";

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

const PlanetDetails = withSwapiService(mapMethodsToProps)(
  withDetailItemsData(ItemDetails)
);

export default PlanetDetails;
