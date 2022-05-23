import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import BodyWrapper from "../BodyWrapper";

import ErrorMessage from "../ErrorMessage";
import Header from "../Header";
import ItemDetails, { Record } from "../ItemDetails";
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
    const { getPerson, getPersonImage } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    const itemPerson = (
      <ItemDetails itemId={4} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    // const itemStarships = <ItemDetails itemId={5} getData={getStarships} />;
    return (
      <div className="container">
        <Header />
        {/* {planet} */}
        {/* <button onClick={this.toggleRandomPlanet} className="btn btn-warning">
          toggleRandomPlanet
        </button> */}
        <BodyWrapper left={itemPerson} right={null} />
        {/* <PeoplePage /> */}
      </div>
    );
  }
}
