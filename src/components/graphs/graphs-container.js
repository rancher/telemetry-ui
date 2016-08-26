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
        <div className='row alert'>
          <EnvironmentsContainer/>
          <HostsContainer/>
        </div>
        <div className='row alert'>
          <StackContainer/>
          <ServiceContainer/>
        </div>
        <div className='row alert'>
          <ContainerContainer/>
        </div>
      </div>
    );
  }
}

export default GraphsContainer;
