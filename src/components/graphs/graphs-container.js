import React, { Component } from 'react';
import EnvironmentsContainer from './environments/environments-container';
import HostsContainer from './hosts/hosts-container';

class GraphsContainer extends Component {
  render() {
    return (
      <div>
        <EnvironmentsContainer />
        <HostsContainer />
      </div>
    );
  }
}

export default GraphsContainer;
