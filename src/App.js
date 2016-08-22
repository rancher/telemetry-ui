import React, { Component } from 'react';
import InstallsContainer from './components/installs/installs-container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Telemetry</h2>
        </div>
        <InstallsContainer />
      </div>
    );
  }
}

export default App;
