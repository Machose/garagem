import React, { useRef, useEffect, useState } from 'react';

// Bibliotecas instaladas
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

// Servico de back end
import api from '../../../services/api';

//Componentes
import Input from '../../../components/Unform/Cadastro/Input';
import Select from '../../../components/Unform/Cadastro/Select';

import Card from '../../../components/Card/styles';
import { FormFooter } from './styled';
import {
  ButtonSave,
  ButtonCancel,
} from '../../../components/Buttons/ButtonsForm/styled';

export default function CarForm() {
  let history = useHistory();

  const formRef = useRef(null);

  const [carModels, setCarModels] = useState([]);
  const [colors, setColors] = useState([]);

  //Após a renderização ele executa algo
  useEffect(() => {
    async function findCarModels() {
      const response = await api.get('/models?_expand=brand');
      const carModelsArray = response.data.map((carModel) => ({
        value: carModel.id,
        label: carModel.name,
      }));
      setCarModels(carModelsArray);
    }

    async function findColors() {
      const response = await api.get('/colors');
      const colorsArray = response.data.map((color) => ({
        value: color.id,
        label: color.name,
      }));
      setColors(colorsArray);
    }

    findCarModels();
    findColors();
  }, []); //useEffect com o [] como segundo parametro faz com que algo aconteca apenas uma unica vez

  //Lidar com o submit do formulario
  function handleSubmit(data, { reset }) {
    saveCar(data);
    reset();
  }

  function saveCar(car) {
    api
      .post('/cars', car)
      .then(function (response) {
        console.log('Salvou: ', response);

        history.push('/carros');
      })
      .catch(function (error) {
        console.log('Ocorreu um erro');
      });
  }

  return (
    <Card>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="number"
          id="year"
          name="year"
          label="Ano"
          placeholder="Ex.: 2012"
          required
        />

        <Input
          type="text"
          id="board"
          name="board"
          label="Placa"
          placeholder="Ex.: ASQ-2469"
          required
        />

        <Select
          id="modelId"
          name="modelId"
          label="Modelo"
          placeholder="Selecione uma opção"
          options={carModels}
        />

        <Select
          id="colorId"
          name="colorId"
          label="Cor"
          placeholder="Selecione uma opção"
          options={colors}
        />

        <FormFooter>
          <Link to="/carros">
            <ButtonCancel type="button">Cancelar</ButtonCancel>
          </Link>

          <ButtonSave type="submit">Salvar</ButtonSave>
        </FormFooter>
      </Form>
    </Card>
  );
}
