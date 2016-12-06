import React, { Component } from 'react';
import {AreaChart, Area, Cell, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, ResponsiveContainer} from 'recharts';
import GraphLoader from '../../graph-loader/graph-loader';

class Hosts extends Component {
  render() {
    if (this.props.lineData && this.props.pieData) {
      return (
        <div className="col span-12">
          <h1>Hosts</h1>
          <div>
            <h4>Total CPU Cores: {this.props.cpuTotals.cores}</h4>
            <h4>Total Mhz: {this.props.cpuTotals.mhz}</h4>
          </div>
          <ResponsiveContainer width={'50%'} height={300} >
            <AreaChart data={this.props.lineData}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer width={'50%'} height={300} >
            <PieChart>
              <Pie data={this.props.pieData} nameKey='label' valueKey='value' label={true} labelLine={true}>
                {
                  this.props.pieData.map((entry, index, arr) => <Cell key={`cell-${index}`} fill={entry.color}/>)
                }
              </Pie>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }
    return (
      <GraphLoader />
    );
  }
}

export default Hosts;
