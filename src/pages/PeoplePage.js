import React, { Component } from "react";

import BodyWrapper from "../components/BodyWrapper";
import Record from "../components/ItemDetails/Record";

import { PersonList } from "../components/sw-components/item-lists";
import PersonDetails from "../components/sw-components/person-details";

export default class PeoplePage extends Component {
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
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={
          <PersonDetails itemId={selectedItem}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
          </PersonDetails>
        }
      />
    );
  }
}
