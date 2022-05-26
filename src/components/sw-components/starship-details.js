import React from "react";

import withDetailItemsData from "../hoc-helpers/with-detail-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemDetails from "../ItemDetails";
import Record from "../ItemDetails/Record";

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  const StarshipDetails = withDetailItemsData(
    ItemDetails,
    getStarship,
    getStarshipImage
  );
  return (
    <StarshipDetails itemId={itemId}>
      <Record field="model" label="Model" />
      <Record field="passengers" label="Passengers" />
      <Record field="length" label="Length" />
    </StarshipDetails>
  );
};

export default withSwapiService(StarshipDetails);
