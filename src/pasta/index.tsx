import React from 'react';
import ReactDOM from 'react-dom';
import AppPasta from './AppPasta';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/pasta">
    <AppPasta />
  </Router>,
  document.getElementById('root')
);