import React, { Component } from 'react';
import Stack from './stack';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYSTACK = 'stack.from_catalog';
const STACKSCOUNTS = 'stack.from_catalog,stack.per_env_avg';
class StackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      stacksTotals: {
        fromCatalog: 0,
        perEnvAvg: 0
      },
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/historical/${TOTALSKEYSTACK}`, {
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
        lineData: GraphUtil.parseLineData(response, 'Total Environments', TOTALSKEYSTACK)
      });
    });

    fetch(`https://telemetry.rancher.io/admin/counts/${STACKSCOUNTS}`, {
      headers: {
        'Authorization': `Basic ${btoa('foo:bar')}`
      }
    }).then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((response) => {
      let stackCounts = STACKSCOUNTS.split(',');
      this.setState({
        stacksTotals: {
          fromCatalog: response[stackCounts[0]],
          perEnvAvg: response[stackCounts[1]]
        }
      });
    });

  }

  render() {
    return (
      <Stack lineData={this.state.lineData} stacksTotals={this.state.stacksTotals}/>
    );
  }
}

export default StackContainer;
