import React, { Component } from 'react';

import CarForm from '../CarForm';
import Card from '../../../components/Card';
import Table from '../../../components/Table';

import api from '../../../services/api';

export default class CarList extends Component {
  state = {
    cars: [],
    rows: [],
    headings: [],
  };

  async componentDidMount() {
    const response = await api.get('/carros?_expand=modelo');
    const { data } = response;

    console.log(data);

    const headings = ['Ano', 'Placa', 'Modelo', 'Cor'];

    const rows = data.map((car) => [
      car.ano,
      car.placa,
      car.modelo.nome,
      car.cor,
    ]);

    this.setState({ cars: data, headings, rows });
  }

  render() {
    return (
      <Card
        title="Lista de Carros"
        component={Table}
        headings={this.state.headings}
        rows={this.state.rows}
      />
    );
  }
}
