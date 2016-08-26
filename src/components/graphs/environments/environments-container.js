import React, { Component } from 'react';
import Environments from './environments';

const TOTALSKEY = 'environment.total';
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

function getIndex(value, arr, prop) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i][prop] === value) {
        return i;
    }
  }
  return -1; //to handle the case where the value doesn't exist
}

class EnvironmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: null,
      pieData: null
    };
  }

  parseLineData(dataset, label) {
    let out = {
      datasets: [{
        label: label,
        data: []
      }]
    };
    let data = [];
    let keys = Object.keys(dataset);

    out.labels = keys;
    keys.forEach((cv) => {
      data.push(dataset[cv][TOTALSKEY]);
    });

    out.datasets[0].data = data;
    return out;
  }

  parsePieData(dataset, map) {
    let out = map;
    let keys = Object.keys(dataset);

    keys.forEach((orch) => {
      out[getIndex(orch, out, 'label')].value = dataset[orch];
    });

    return out;
  }

  componentDidMount() {
    fetch(`https://telemetry.rancher.io/admin/historical/${TOTALSKEY}`, {
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
        lineData: this.parseLineData(response, 'Total Environments')
      });
    });

    fetch(`https://telemetry.rancher.io/admin/count-map/environment.orch`, {
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
        pieData: this.parsePieData(response, orchMap)
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
