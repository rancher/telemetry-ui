import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';

class Environments extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div>
          <h1>Environemnts</h1>
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
