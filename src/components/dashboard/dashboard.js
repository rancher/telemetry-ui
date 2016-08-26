import React, { Component } from 'react';
import InstallsContainer from './../installs/installs-container';
import GraphsContainer from './../graphs/graphs-container';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <GraphsContainer />
        <InstallsContainer />
      </div>
    );
  }
}

export default Dashboard;
