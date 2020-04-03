import React, { useRef } from 'react';
import { Form } from '@unform/web';

import Input from '../../../components/Unform/Cadastro/Input';
import Card from '../../../components/Card/styles';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import {
  ButtonSave,
  ButtonCancel,
} from '../../../components/Buttons/ButtonsForm/styled';
import { FormFooter } from './styled';

export default function CarForm() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    saveCar(data);
    reset();
  }

  function saveCar(car) {
    api
      .post('/carros', car)
      .then(function (response) {
        console.log('Salvou: ', response);
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
          id="ano"
          name="ano"
          label="Ano"
          placeholder="Ex.: 2012"
          required
        />

        <Input
          type="text"
          id="placa"
          name="placa"
          label="Placa"
          placeholder="Ex.: ASQ-2469"
          required
        />

        <Input
          type="text"
          id="modeloId"
          name="modeloId"
          label="Modelo"
          placeholder="Ex.: Onix"
          required
        />

        <Input
          type="text"
          id="cor"
          name="cor"
          label="Cor"
          placeholder="Ex.: Branco"
          required
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
