import React, { Component } from 'react';
import SortableTh from '../sortable-th/sortable-th';
import fetch from 'isomorphic-fetch'

class InstallsContainer extends Component {
  constructor() {
    super();
    this.state = {
      installs: null
    };
  }



  componentDidMount() {
    return fetch('https://telemetry.rancher.io/admin/installs', {
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
        installs: response.data
      });
    });

  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <SortableTh label='UID' name='uid' />
            <SortableTh label='Age' name='age' />
            <SortableTh label='Version' name='version' />
            <SortableTh label='Auth' name='Auth' />
            <SortableTh label='Environment' name='environment' />
            <SortableTh label='Orchestration' name='orchestration' />
            <SortableTh label='Host' name='host' />
            <SortableTh label='Memory' name='memory' />
            <SortableTh label='Stack' name='stack' />
            <SortableTh label='Catalog' name='catalog' />
            <SortableTh label='Container' name='container' />
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

export default InstallsContainer;
