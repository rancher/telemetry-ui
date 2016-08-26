import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';

class Hosts extends Component {
  render() {
    if (this.props.lineData /*&& this.props.pieData*/) {
      return (
        <div>
          <h1>Hosts</h1>
          <div>
            <h4>Total CPU Cores: {this.props.cpuTotals.cores}</h4>
            <h4>Total Mhz: {this.props.cpuTotals.mhz}</h4>
          </div>
          <Line data={this.props.lineData} />
          {/*<Pie data={this.props.pieData} />*/}
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default Hosts;
