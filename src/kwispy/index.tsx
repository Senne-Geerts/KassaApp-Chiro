import React from 'react';
import ReactDOM from 'react-dom';
import AppKwispy from './AppKwispy';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/kwispy">
    <AppKwispy />
  </Router>,
  document.getElementById('root')
);
