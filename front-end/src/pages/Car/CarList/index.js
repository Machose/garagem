import React, { Component } from 'react';

// Bibliotecas instaladas
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

// Servico de back end
import api from '../../../services/api';

//Componentes
import Card from '../../../components/Card/styles';
import Table from '../../../components/Table';
import RegisterButton from '../../../components/Buttons/Register/styles';

export default class CarList extends Component {
  state = {
    cars: [],
    rows: [],
    headings: [],
  };

  async componentDidMount() {
    const response = await api.get('/cars?_expand=color&_expand=model');
    const { data } = response;

    const headings = ['Ano', 'Placa', 'Modelo', 'Cor'];

    const rows = data.map((car) => [
      car.year,
      car.board,
      car.model.name,
      car.color.name,
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
            <FaPlus />
            Cadastrar
          </RegisterButton>
        </Link>
        <Table headings={this.state.headings} rows={this.state.rows} />
      </Card>
    );
  }
}
