import React, { Component } from "react";

import BodyWrapper from "../components/BodyWrapper";
import Record from "../components/ItemDetails/Record";

import { PlanetList } from "../components/sw-components/item-lists";
import PlanetDetails from "../components/sw-components/planet-details";

export default class PlanetPage extends Component {
  state = {
    selectedItem: 4,
  };
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;

    return (
      <BodyWrapper
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={
          <PlanetDetails itemId={selectedItem}>
            <Record field="population" label="Population" />
            <Record field="diameter" label="Diameter" />
            <Record field="rotationPeriod" label="Rotation period" />
          </PlanetDetails>
        }
      />
    );
  }
}
