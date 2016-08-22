import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    let model = this.props.model;
    return (
      <tr>
        <td>{model.uid}</td>
        <td>{model.first_seen}</td>
        <td>{model.record.install.version}</td>
        <td>{Object.keys(model.record.install.auth)[0]}</td>
        <td>{model.record.environment.total}</td>
        <td>{Object.keys(model.record.environment.orch)[0]}</td>
        <td>{model.record.host.count}</td>
        <td>{(model.record.host.mem.mb_total * 1024)}</td>
        <td>{model.record.stack.total}</td>
        <td>{model.record.stack.from_catalog}</td>
        <td>{model.record.service.total}</td>
        <td>{model.record.container.total}</td>
      </tr>
    );
  }
}

export default TableRow;
