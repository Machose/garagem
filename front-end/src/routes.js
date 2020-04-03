import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarList from './pages/Car/CarList';
import CarForm from './pages/Car/CarForm';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={CarList} />
      <Route path="/carros" component={CarList} />
      <Route path="/carro/novo" component={CarForm} />
      <Route path="/carro/visualizar/:id" component={CarForm} />
      <Route path="/carro/alterar/:id" component={CarForm} />
      <Route path="/" exact component={NotFound} />
    </Switch>
  );
}
