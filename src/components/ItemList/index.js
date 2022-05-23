import React, { Component } from "react";
// import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner";

import "./style.css";

export default class ItemList extends Component {
  state = {
    itemList: [],
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(items) {
    return items.map((item) => {
      const { id } = item;
      const label = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    const items = this.renderItems(itemList);

    if (itemList.length === 0) {
      return <Spinner />;
    }
    return <ul className="item-list list-group">{items}</ul>;
  }
}
