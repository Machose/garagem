import React, { Component } from 'react';

import Card from '../../../components/Card/styles';
import Table from '../../../components/Table';

import api from '../../../services/api';

import { Link } from 'react-router-dom';
import RegisterButton from '../../../components/Buttons/Register/styles';

import { FaPlus } from 'react-icons/fa';

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
      <Card>
        <h1>Lista de Carros</h1>
        <hr />
        <Link to="/carro/novo">
          <RegisterButton>
            {' '}
            <FaPlus />
            Cadastrar
          </RegisterButton>
        </Link>
        <Table headings={this.state.headings} rows={this.state.rows} />
      </Card>
    );
  }
}
