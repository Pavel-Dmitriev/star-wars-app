import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import BodyWrapper from "../BodyWrapper";

import ErrorMessage from "../ErrorMessage";
import Header from "../Header";
import ItemDetails from "../ItemDetails";
import Record from "../ItemDetails/Record";
import ItemList from "../ItemList";
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
    const { getPerson, getAllPeople, getPersonImage } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    const PersonList = (
      <ItemList getData={getAllPeople} onItemSelected={() => {}}>
        {({ name, birthYear }) => `${name} (${birthYear})`}
      </ItemList>
    );

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
        <BodyWrapper left={PersonList} right={itemPerson} />
        {/* <PeoplePage /> */}
      </div>
    );
  }
}
