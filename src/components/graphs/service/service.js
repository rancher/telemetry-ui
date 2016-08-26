import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';

class Service extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div>
          <h1>Services</h1>
          <div>
            <h4>Per Stack Average: {this.props.serviceTotals.perStackAvg}</h4>
          </div>
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

export default Service;
