import React, { Component } from 'react';
import EnvironmentsContainer from './environments/environments-container';
import HostsContainer from './hosts/hosts-container';
import StackContainer from './stacks/stack-container';
import ServiceContainer from './service/service-container';
import ContainerContainer from './container/containers-container';

class GraphsContainer extends Component {
  render() {
    return (
      <div>
        <EnvironmentsContainer />
        <HostsContainer />
        <StackContainer />
        <ServiceContainer />
        <ContainerContainer />
      </div>
    );
  }
}

export default GraphsContainer;
