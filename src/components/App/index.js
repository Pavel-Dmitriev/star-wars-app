import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import BodyWrapper from "../BodyWrapper";

import ErrorMessage from "../ErrorMessage";
import Header from "../Header";
import Record from "../ItemDetails/Record";
import { PersonDetails } from "../sw-components/details";
// import ItemList from "../ItemList";
import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";
// import PeoplePage from "../PeoplePage";
// import RandomPlanet from "../RandomPlanet";

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
      <div className="container">
        <Header />
        <button onClick={this.toggleRandomPlanet} className="btn btn-warning">
          toggleRandomPlanet
        </button>
        <PersonList />
        <StarshipList />
        <PersonDetails itemId={4}>
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />
        </PersonDetails>
        {/* <StarshipList>{({ name }) => `${name} ()`}</StarshipList> */}
        {/* {planet} */}
        {/* <PeoplePage /> */}
      </div>
    );
  }
}
