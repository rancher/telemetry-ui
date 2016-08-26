import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import InstallDetailContainer from './components/install-detail/install-detail-container';
import Dashboard from './components/dashboard/dashboard';
import App from './App';
import '../node_modules/lacsso/lacsso.css';
import './index.css';
import './vendor/icons/style.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/install/:id" component={InstallDetailContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
