import React, { Component } from "react";

import Spinner from "../Spinner";

const withDetailItemsData = (View) => {
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

      this.props.getData(itemId).then((item) => {
        this.setState({
          item,
          image: this.props.getImageUrl(item),
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
