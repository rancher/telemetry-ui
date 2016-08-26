import React, { Component } from 'react';
import InstallsContainer from './../installs/installs-container';
import GraphsContainer from './../graphs/graphs-container';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <GraphsContainer />
        <InstallsContainer />
      </div>
    );
  }
}

export default Dashboard;
