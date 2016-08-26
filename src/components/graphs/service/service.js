import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';
import GraphLoader from '../../graph-loader/graph-loader';

class Service extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div className="col span6">
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
      <GraphLoader />
    );
  }
}

export default Service;
