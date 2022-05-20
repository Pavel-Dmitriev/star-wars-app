import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import ErrorMessage from "../ErrorMessage";
import Header from "../Header";
import ItemList from "../ItemList";
import PeoplePage from "../PeoplePage";
import RandomPlanet from "../RandomPlanet";

import "./style.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    return (
      <div className="container">
        <Header />
        {planet}
        <button onClick={this.toggleRandomPlanet} className="btn btn-warning">
          toggleRandomPlanet
        </button>
        <div className="row mt-2 mb-2">
          <PeoplePage />

          <div className="col-md-6 mt-2">
            <ItemList
              getData={this.swapiService.getAllStarships}
              renderItem={({ name, passengers }) => `${name} (${passengers})`}
            />
          </div>

          <div className="col-md-6 mt-2">
            <ItemList
              getData={this.swapiService.getAllPlanet}
              renderItem={({ name, population }) => `${name} (${population})`}
            />
          </div>
        </div>
      </div>
    );
  }
}
