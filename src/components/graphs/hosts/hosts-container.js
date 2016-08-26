import React, { Component } from 'react';
import Hosts from './hosts';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYHOST = 'host.count';
const TOTALSKEYDRIVER = 'host.driver';
let orchMap = [
  {
    "value": null,
    "color": "#F7464A",
    "highlight": "#FF5A5E",
    "label": "cattle"
  },
  {
    "value": null,
    "color": "#46BFBD",
    "highlight": "#5AD3D1",
    "label": "kubernetes"
  },
  {
    "value": null,
    "color": "#FDB45C",
    "highlight": "#FFC870",
    "label": "swarm"
  },
  {
    "value": null,
    "color": "#949FB1",
    "highlight": "#A8B3C5",
    "label": "mesos"
  }
];


class HostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      pieData: null
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/historical/${TOTALSKEYHOST}`, {
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

    {/*fetch(`https://telemetry.rancher.io/admin/count-map/${TOTALSKEYDRIVER}`, {
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
        pieData: GraphUtil.parsePieData(response, orchMap)
      });
    });
    */}

  }

  render() {
    return (
      <Hosts lineData={this.state.lineData} pieData={this.state.pieData}/>
    );
  }
}

export default HostsContainer;
