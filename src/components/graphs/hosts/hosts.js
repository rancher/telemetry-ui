import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';
import GraphLoader from '../../graph-loader/graph-loader';

class Hosts extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div className="col span6">
          <h1>Hosts</h1>
          <div>
            <h4>Total CPU Cores: {this.props.cpuTotals.cores}</h4>
            <h4>Total Mhz: {this.props.cpuTotals.mhz}</h4>
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

export default Hosts;
