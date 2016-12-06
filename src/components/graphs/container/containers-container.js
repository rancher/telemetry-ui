import React, { Component } from 'react';
import Container from './container';
import GraphUtil from '../../../utils/graph';

const TOTALSCONTAINER = 'container.total';
const CONTAINERTOTALS = 'container.per_host_avg'

class ContainerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      containerTotals: 0
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/history/fields/${TOTALSCONTAINER}`, {
      headers: {
        'Authorization': `Basic ${btoa('')}`
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

    fetch(`https://telemetry.rancher.io/admin/active/fields/${CONTAINERTOTALS}`, {
      headers: {
        'Authorization': `Basic ${btoa('')}`
      }
    }).then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((response) => {
      this.setState({
        containerTotals: response[CONTAINERTOTALS]
      });
    });
  }

  render() {
    return (
      <Container lineData={this.state.lineData} containerTotals={this.state.containerTotals}/>
    );
  }
}

export default ContainerContainer;
