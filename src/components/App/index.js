import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../swapi-service-context";

import ErrorMessage from "../ErrorMessage";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import Record from "../ItemDetails/Record";

import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";

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
            <PersonDetails itemId={4}>
              <Record field="gender" label="Gender" />
              <Record field="birthYear" label="Birth Year" />
              <Record field="eyeColor" label="Eye Color" />
            </PersonDetails>
            <PlanetDetails itemId={7}>
              <Record field="population" label="Population" />
              <Record field="diameter" label="Diameter" />
              <Record field="rotationPeriod" label="Rotation period" />
            </PlanetDetails>
            <StarshipDetails itemId={5}>
              <Record field="model" label="Model" />
              <Record field="passengers" label="Passengers" />
              <Record field="length" label="Length" />
            </StarshipDetails>
            {/* {planet} */}
            {/* <PeoplePage /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
