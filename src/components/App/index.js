import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../swapi-service-context";

import ErrorMessage from "../ErrorMessage";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";

import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";
import PersonDetails from "../sw-components/person-details";

import "./style.css";
import StarshipDetails from "../sw-components/starship-details";

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
    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    // const { getPerson, getAllPeople, getPersonImage } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    // const itemStarships = <ItemDetails itemId={5} getData={getStarships} />;
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            <button
              onClick={this.toggleRandomPlanet}
              className="btn btn-warning"
            >
              toggleRandomPlanet
            </button>
            <PersonList />
            <StarshipList />
            <PersonDetails itemId={4} />
            <PlanetDetails itemId={7} />
            <StarshipDetails itemId={5} />
            {/* {planet} */}
            {/* <PeoplePage /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
