import React, { Component } from 'react';
import { Line } from 'react-chartjs';

class Hosts extends Component {
  render() {
    if (this.props.lineData) {
      return (
        <div>
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
      <div>Loading</div>
    );
  }
}

export default Hosts;
