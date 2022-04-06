import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
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
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanets(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const viewPlanet = !loading ? <ViewPlanet planet={planet} /> : null;

    return (
      <div className="random-planet card rounded">
        {spinner}
        {viewPlanet}
      </div>
    );
  }
}

const ViewPlanet = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter, loading } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
