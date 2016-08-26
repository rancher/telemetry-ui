import React, { Component } from 'react';
import Container from './container';
import GraphUtil from '../../../utils/graph';

const TOTALSCONTAINER = 'container.total';

class ContainerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/historical/${TOTALSCONTAINER}`, {
      headers: {
        'Authorization': `Basic ${btoa('foo:bar')}`
      }
    }).then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((response) => {
      this.setState({
        lineData: GraphUtil.parseLineData(response, 'Total Environments', TOTALSCONTAINER)
      });
    });

  }

  render() {
    return (
      <Container lineData={this.state.lineData}/>
    );
  }
}

export default ContainerContainer;
