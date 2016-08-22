import React, { Component } from 'react';
import TableRow from '../components/table-row/table-row';

class SortableTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

export default SortableTable;
