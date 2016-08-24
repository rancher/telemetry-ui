import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import { Table, Tr, Td } from 'reactable';
import './installs.css';

const TABLE_LAYOUT = [
  {
    name: 'UID',
    path: 'uid'
  },
  {
    name: 'Age',
    path: 'first_seen'
  },
  {
    name: 'Version',
    path: 'record.install.version'
  },
  {
    name: 'Auth',
    path: 'record.install.auth'
  },
  {
    name: 'Environment',
    path: 'record.environment.total'
  },
  {
    name: 'Orch',
    path: 'record.environment.orch'
  },
  {
    name: 'Host',
    path: 'record.host.count'
  },
  {
    name: 'Memory',
    path: 'record.host.mem.mb_total'
  },
  {
    name: 'Stack',
    path: 'record.stack.total'
  },
  {
    name: 'Catalog',
    path: 'record.stack.from_catalog'
  },
  {
    name: 'Service',
    path: 'record.service.total'
  },
  {
    name: 'Container',
    path: 'record.container.total'
  },
];

class InstallsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: []
    };
  }

  componentDidMount() {
    return fetch('https://telemetry.rancher.io/admin/installs?hours=48', {
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
        model: response.data
      });
    });

  }

  render() {
    let parseContentText = function(item, install) {
      switch(item.name) {
        case 'Auth':
          return Object.keys(install.record.install.auth)[0];
          break;
        case 'Orch':
          let max = {
            value: 0,
            name: null
          };
          let keys = Object.keys(item.path.split('.').reduce((o,i)=>o[i], install));

          keys.forEach((cv, idx, arr) => {
            let newPath = `${item.path}.${cv}`;
            let value = newPath.split('.').reduce((o,i)=>o[i], install);

            if (value > max.value) {
              max.value = value;
              max.name= cv;
            }
          });
          return `${max.name} : ${(max.value * 100)}%`;
          break;
        default:
          return item.path.split('.').reduce((o,i)=>o[i], install)
          break;
      }
    }
    let getTableContent = function(install) {
      return TABLE_LAYOUT.map((tableItem) => {
        return (
          <Td column={tableItem.name} style={{width: 80}} key={install.id}>
            {parseContentText(tableItem, install) }
          </Td>
        )
      });
    }

    let tableRows = this.state.model.map((install) => {
      return (
        <Tr key={install.id}>
          {getTableContent(install)}
        </Tr>
      )
    });

    return (
      <Table id="installs-table" sortable={true}>
        {tableRows}
      </Table>
    )
  }
}

export default InstallsContainer;
