import React, { Component } from "react";
import ErrorMessage from "../ErrorMessage";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 2,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    return (
      <React.Fragment>
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </React.Fragment>
    );
  }
}
