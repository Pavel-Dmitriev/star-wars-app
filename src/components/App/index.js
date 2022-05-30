import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../swapi-service-context";

import ErrorMessage from "../ErrorMessage";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import PeoplePage from "../../pages/PeoplePage";
import PlanetPage from "../../pages/PlanetPage";
import StarshipPage from "../../pages/StarshipPage";

import "./style.css";
export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container">
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <StarshipPage />
            <PlanetPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
