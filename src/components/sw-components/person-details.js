import React from "react";

import withDetailItemsData from "../hoc-helpers/with-detail-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemDetails from "../ItemDetails";
import Record from "../ItemDetails/Record";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  const PersonDetails = withDetailItemsData(
    ItemDetails,
    getPerson,
    getPersonImage
  );
  return (
    <PersonDetails itemId={itemId}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </PersonDetails>
  );
};

export default withSwapiService(PersonDetails);
