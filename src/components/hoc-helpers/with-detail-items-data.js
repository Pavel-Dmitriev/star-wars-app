import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import Spinner from "../Spinner";

export const withDetailItemsData = (View, getData, getImageUrl) => {
  return class extends Component {
    swapiService = new SwapiService();

    state = {
      item: [],
      image: "",
    };

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    }

    updateItem() {
      const { itemId } = this.props;
      if (!itemId) {
        return;
      }

      getData(itemId).then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
        });
      });
    }
    render() {
      const { item, image } = this.state;
      if (!item) {
        return <Spinner />;
      }
      return <View {...this.props} item={item} image={image}></View>;
    }
  };
};
