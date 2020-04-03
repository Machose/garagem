import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './styles/global';

import Routes from './routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
