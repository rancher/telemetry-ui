import React, { Component } from 'react';
import Stack from './stack';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYSTACK = 'stack.from_catalog';

class StackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
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

  }

  render() {
    return (
      <Stack lineData={this.state.lineData}/>
    );
  }
}

export default StackContainer;
