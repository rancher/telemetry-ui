import React, { Component } from 'react';
import Hosts from './hosts';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYHOST = 'host.count';
const TOTALSKEYDRIVER = 'host.driver';
const CPUTOTALS = 'host.cpu.cores_total,host.cpu.mhz_total';

class HostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      pieData: null,
      cpuTotals: {
        cores: 0,
        mhz: 0
      }
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/history/fields/${TOTALSKEYHOST}`, {
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
        lineData: GraphUtil.parseLineData(response, 'Total Environments', TOTALSKEYHOST)
      });
    });

    fetch(`https://telemetry.rancher.io/admin/active/fields/${CPUTOTALS}`, {
      headers: {
        'Authorization': `Basic ${btoa('foo:bar')}`
      }
    }).then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((response) => {
      let cpuTotals = CPUTOTALS.split(',');
      this.setState({
        cpuTotals: {
          cores: response[cpuTotals[0]],
          mhz: response[cpuTotals[1]]
        }
      });
    });

    fetch(`https://telemetry.rancher.io/admin/active/map/${TOTALSKEYDRIVER}`, {
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
        pieData: GraphUtil.parsePieData(response, GraphUtil.constructMap(response))
      });
    });


  }

  render() {
    return (
      <Hosts lineData={this.state.lineData} pieData={this.state.pieData} cpuTotals={this.state.cpuTotals}/>
    );
  }
}

export default HostsContainer;
