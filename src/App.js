import React, { Component } from 'react';
import './App.css';
import './logos/loader-graph.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Telemetry</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
