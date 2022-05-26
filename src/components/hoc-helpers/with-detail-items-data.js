import React, { Component } from "react";

import Spinner from "../Spinner";

const withDetailItemsData = (View, getData, getImageUrl) => {
  return class extends Component {
    state = {
      item: [],
      image: null,
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

export default withDetailItemsData;
