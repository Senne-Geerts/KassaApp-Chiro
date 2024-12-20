import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section from './common/Section';
import Home from './Home';
import AppKwispy from './kwispy/AppKwispy';
import AppPasta from './pasta/AppPasta';
import AppKaasWijn from './kaas-en-wijn/AppKaasWijn'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/kwispy" element={<AppKwispy />} />
      <Route path="/pasta" element={<AppPasta />} />
      <Route path="/kaaswijn" element={<AppKaasWijn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

