import React, { Component } from "react";
import ErrorMessage from "../ErrorMessage";

import Header from "../Header";
import PeoplePage from "../PeoplePage";
import RandomPlanet from "../RandomPlanet";

import "./style.css";

export default class App extends Component {
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
        </div>
      </div>
    );
  }
}
