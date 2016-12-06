import React, { Component } from 'react';
import Service from './service';
import GraphUtil from '../../../utils/graph';

const TOTALSKEYENV = 'service.total';
const TOTALSKEYORCH = 'service.kind';
const TOTALSSERVICES = 'service.per_stack_avg';

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
    fetch(`https://telemetry.rancher.io/admin/history/fields/${TOTALSKEYENV}`, {
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
        lineData: GraphUtil.parseLineData(response, 'Total Services', TOTALSKEYENV)
      });
    });

    fetch(`https://telemetry.rancher.io/admin/active/map/${TOTALSKEYORCH}`, {
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
        pieData: GraphUtil.parsePieData(response, GraphUtil.constructMap(response))
      });
    });

    fetch(`https://telemetry.rancher.io/admin/active/fields/${TOTALSSERVICES}`, {
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
