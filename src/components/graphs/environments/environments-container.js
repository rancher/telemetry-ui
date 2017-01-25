import React, { Component } from 'react';
import Environments from './environments';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYENV = 'environment.total';
const TOTALSKEYORCH = 'environment.orch';

class EnvironmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      pieData: null
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/history/fields/${TOTALSKEYENV}`, {
      // headers: {
      //   'Authorization': `Basic ${btoa('')}`
      // }
    }).then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((response) => {
      this.setState({
        lineData: GraphUtil.parseLineData(response, 'Total Environments', TOTALSKEYENV)
      });
    });

    fetch(`https://telemetry.rancher.io/admin/active/map/${TOTALSKEYORCH}`, {
      // headers: {
      //   'Authorization': `Basic ${btoa('')}`
      // }
    }).then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((response) => {
      this.setState({
        pieData: GraphUtil.parsePieData(response, GraphUtil.constructMap(response)),
      });
    });

  }

  render() {
    return (
      <Environments lineData={this.state.lineData} pieData={this.state.pieData}/>
    );
  }
}

export default EnvironmentsContainer;
