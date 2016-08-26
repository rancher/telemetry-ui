import React, { Component } from 'react';
import EnvironmentsContainer from './environments/environments-container';
import HostsContainer from './hosts/hosts-container';
import StackContainer from './stacks/stack-container';

class GraphsContainer extends Component {
  render() {
    return (
      <div>
        <EnvironmentsContainer />
        <HostsContainer />
        <StackContainer />
      </div>
    );
  }
}

export default GraphsContainer;
