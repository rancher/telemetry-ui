import React, { Component } from 'react';
import { Line } from 'react-chartjs';

class Hosts extends Component {
  render() {
    if (this.props.lineData) {
      return (
        <div>
          <h1>Stacks</h1>
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
