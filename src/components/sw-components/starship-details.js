import withDetailItemsData from "../hoc-helpers/with-detail-items-data";
import { withSwapiService } from "../hoc-helpers/withSwapiService";

import ItemDetails from "../ItemDetails";

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

const StarshipDetails = withSwapiService(mapMethodsToProps)(
  withDetailItemsData(ItemDetails)
);

export default StarshipDetails;
