import React, { Component } from "react";

import BodyWrapper from "../components/BodyWrapper";
import Record from "../components/ItemDetails/Record";

import { StarshipList } from "../components/sw-components/item-lists";
import StarshipDetails from "../components/sw-components/starship-details";

export default class StarshipPage extends Component {
  state = {
    selectedItem: 5,
  };
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;

    return (
      <BodyWrapper
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={
          <StarshipDetails itemId={selectedItem}>
            <Record field="model" label="Model" />
            <Record field="passengers" label="Passengers" />
            <Record field="length" label="Length" />
          </StarshipDetails>
        }
      />
    );
  }
}
