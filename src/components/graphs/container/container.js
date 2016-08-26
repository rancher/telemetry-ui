import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import GraphLoader from '../../graph-loader/graph-loader';


class Container extends Component {
  render() {
    if (this.props.lineData) {
      return (
        <div className="col span6">
          <h1>Containers</h1>
          <h4>Per Host Average: {this.props.containerTotals}</h4>
          <Line data={this.props.lineData} />
        </div>
      );
    }
    return (
      <GraphLoader />
    );
  }
}

export default Container;
