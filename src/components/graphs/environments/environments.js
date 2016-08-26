import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';

class Environments extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div>
          <Line data={this.props.lineData} />
          <Pie data={this.props.pieData} />
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default Environments;
