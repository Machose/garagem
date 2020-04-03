import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarList from './pages/Car/CarList';
import CarForm from './pages/Car/CarForm';
import Card from './components/Card';

const AppRoute = ({ component: Component, card: Card, ...rest }) => (
  <Route
    {...rest}
    render={(props) => <Card title="teste" component={Component} />}
  />
);

export default function Routes() {
  return (
    <Switch>
      <Route path="/carros" exact component={CarList} />
      <AppRoute path="/carro/novo" exact card={Card} component={CarForm} />
      <AppRoute
        path="/carro/visualizar/:id"
        exact
        card={Card}
        component={CarForm}
      />
      <AppRoute
        path="/carro/alterar/:id"
        exact
        card={Card}
        component={CarForm}
      />
    </Switch>
  );
}
