import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import BodyWrapper from "../BodyWrapper";
import ErrorBoundary from "../ErrorBoundary";
import ErrorMessage from "../ErrorMessage";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 2,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    return (
      <ErrorBoundary>
        <BodyWrapper left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
