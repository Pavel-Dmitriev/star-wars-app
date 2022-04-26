import React, { Component } from "react";
import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import RandomPlanet from "../RandomPlanet";

import "./style.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="container">
        <Header />
        {planet}
        <button onClick={this.toggleRandomPlanet} className="btn btn-warning">
          toggleRandomPlanet
        </button>
        <div className="row mt-2 mb-2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
