import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import GraphLoader from '../../graph-loader/graph-loader';

class Hosts extends Component {
  render() {
    if (this.props.lineData) {
      return (
        <div className="col span6">
          <h1>Stacks</h1>
          <div>
            <h4>Total From Catalog: {this.props.stacksTotals.fromCatalog}</h4>
            <h4>Per Environment Average: {this.props.stacksTotals.perEnvAvg}</h4>
          </div>
          <Line data={this.props.lineData} />
        </div>
      );
    }
    return (
      <GraphLoader />
    );
  }
}

export default Hosts;
