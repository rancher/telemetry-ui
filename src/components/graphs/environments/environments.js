import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs';
import './environments.css';
import GraphLoader from '../../graph-loader/graph-loader';

class Environments extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div className="col span6 container-environments">
          <h1>Environemnts</h1>
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

export default Environments;
