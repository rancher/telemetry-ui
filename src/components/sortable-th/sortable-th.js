import React, { Component } from 'react';

class SortableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSort: 'ascending'
    };
  }

  render() {
    let sortIcons = (() => {
      {if (this.state.activeSort === 'ascending') {
        return (<span className="icon-stack">
          <i className="icon icon-sort icon-stack-1x faded"></i>
          <i className="icon icon-sort-down icon-stack-1x"></i>
        </span>)
      } else {
        return (<span className="icon-stack">
          <i className="icon icon-sort icon-stack-1x faded"></i>
          <i className="icon icon-sort-up icon-stack-1x"></i>
        </span>)
      }}
    });
    return (
      <th>{this.props.label} {sortIcons()}</th>
    );
  }
}

export default SortableTable;
