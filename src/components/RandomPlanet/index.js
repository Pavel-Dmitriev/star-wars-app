import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner/Spinner";

import "./style.css";
export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanets(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const viewPlanet = hasData ? <ViewPlanet planet={planet} /> : null;

    return (
      <div className="random-planet card rounded">
        {errorMessage}
        {spinner}
        {viewPlanet}
      </div>
    );
  }
}
