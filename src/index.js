import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import App from './App';
import Footer from './components/Footer';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
