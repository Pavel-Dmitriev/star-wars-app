import React, { Component } from "react";

import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";

const withDetailItemsData = (View) => {
  return class extends Component {
    state = {
      item: [],
      image: null,
      loading: true,
      error: false,
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

      this.setState({
        loading: true,
        error: false,
      });

      this.props
        .getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: this.props.getImageUrl(item),
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }
    render() {
      const { item, image, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorMessage />;
      }
      return <View {...this.props} item={item} image={image}></View>;
    }
  };
};

export default withDetailItemsData;
