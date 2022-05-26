import React from "react";

import withDetailItemsData from "../hoc-helpers/with-detail-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemDetails from "../ItemDetails";
import Record from "../ItemDetails/Record";

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  const PlanetDetails = withDetailItemsData(
    ItemDetails,
    getPlanet,
    getPlanetImage
  );
  return (
    <PlanetDetails itemId={itemId}>
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
      <Record field="rotationPeriod" label="Rotation period" />
    </PlanetDetails>
  );
};

export default withSwapiService(PlanetDetails);
