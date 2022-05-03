import React, { Component } from "react";

export class ErrorButton extends Component {
  state = {
    renderError: false,
  };
  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => this.setState({ renderError: true })}
        >
          ErrorButton
        </button>
      </div>
    );
  }
}
