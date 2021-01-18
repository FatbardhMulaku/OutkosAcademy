import React, { Component } from "react";
import { FlagSpinner } from "react-spinners-kit";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="SpinnerLoad">
        <FlagSpinner size={40} color="#EB8341" loading={loading} />
      </div>
    );
  }
}
