import React, { Component } from 'react';
import './App.css';
import './logos/loader-graph.svg';

class App extends Component {
  componentDidMount() {
    window.setTimeout(() => {
      document.location.reload();
    }, 600000);
  }
  render() {
    return (
      <div className="app">
        <header>
          <nav className='row'>
            <h2 className="logo btn bg-transparent col span-2">Telemetry</h2>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
