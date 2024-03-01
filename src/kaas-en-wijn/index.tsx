import React from 'react';
import ReactDOM from 'react-dom';
import AppKaasWijn from './AppKaasWijn';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/kaaswijn">
    <AppKaasWijn />
  </Router>,
  document.getElementById('root')
);