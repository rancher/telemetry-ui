import React, { Component } from 'react';
import { Line } from 'react-chartjs';

class Container extends Component {
  render() {
    if (this.props.lineData) {
      return (
        <div>
          <h1>Containers</h1>
          <h4>Per Host Average: {this.props.containerTotals}</h4>
          <Line data={this.props.lineData} />
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default Container;
