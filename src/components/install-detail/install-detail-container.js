import React, { Component } from 'react';
import InstallDetail from './install-detail';
import fetch from 'isomorphic-fetch'

class InstallDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: []
    };
  }

  componentDidMount() {
    return fetch(`https://telemetry.rancher.io/admin/installs/${this.props.params.id}`, {
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
        model: response.data
      });
    });

  }
  render() {
    return (
        <InstallDetail />
    );
  }
}

export default InstallDetailContainer;
