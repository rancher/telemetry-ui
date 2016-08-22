import React, { Component } from 'react';
import TableRow from '../installs-row/installs-row';

class SortableTable extends Component {
  render() {
    return (
      <th>{this.props.label}</th>
    );
  }
}

export default SortableTable;
