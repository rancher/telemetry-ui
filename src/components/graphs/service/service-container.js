import React, { Component } from 'react';
import Service from './service';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYENV = 'service.total';
const TOTALSKEYORCH = 'service.kind';
const TOTALSSERVICES = 'service.per_stack_avg';

let serviceMap = [
  {
    "value": null,
    "color": "#F7464A",
    "highlight": "#FF5A5E",
    "label": "dnsService"
  },
  {
    "value": null,
    "color": "#46BFBD",
    "highlight": "#5AD3D1",
    "label": "externalService"
  },
  {
    "value": null,
    "color": "#FDB45C",
    "highlight": "#FFC870",
    "label": "loadBalancerService"
  },
  {
    "value": null,
    "color": "#949FB1",
    "highlight": "#A8B3C5",
    "label": "service"
  }
];


class ServiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      pieData: null,
      serviceTotals: {
        perStackAvg: 0
      }
    };
  }


  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/historical/${TOTALSKEYENV}`, {
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
        lineData: GraphUtil.parseLineData(response, 'Total Services', TOTALSKEYENV)
      });
    });

    fetch(`https://telemetry.rancher.io/admin/count-map/${TOTALSKEYORCH}`, {
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
        pieData: GraphUtil.parsePieData(response, serviceMap)
      });
    });

    fetch(`https://telemetry.rancher.io/admin/counts/${TOTALSSERVICES}`, {
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
        serviceTotals: {
          perStackAvg: response[TOTALSSERVICES]
        }
      });
    });
  }

  render() {
    return (
       <Service lineData={this.state.lineData} pieData={this.state.pieData} serviceTotals={this.state.serviceTotals}/>
    );
  }
}

export default ServiceContainer;
