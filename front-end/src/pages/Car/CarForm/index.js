import React, { useRef, useEffect, useState } from 'react';

// Bibliotecas instaladas
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
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

function CarForm() {
  let history = useHistory();
  let { id } = useParams();

  const formRef = useRef(null);

  const [carModels, setCarModels] = useState([]);
  const [colors, setColors] = useState([]);
  const [car, setCar] = useState(null);

  //Após a renderização ele executa algo
  useEffect(() => {
    //Busca os modelos cadastrados

    async function findCarModels() {
      const response = await api.get('/models?_expand=brand');
      const carModelsArray = response.data.map((carModel) => ({
        value: carModel.id,
        label: carModel.name,
      }));
      setCarModels(carModelsArray);
    }
    findCarModels();

    //Busca as cores cadastradas

    async function findColors() {
      const response = await api.get('/colors');
      const colorsArray = response.data.map((color) => ({
        value: color.id,
        label: color.name,
      }));
      setColors(colorsArray);
    }
    findColors();

    //Caso seja uma alteração ou visualização busca os dados do carro
    if (id !== undefined && car === null) {
      async function findCarById() {
        const response = await api.get(
          `/cars/${id}?_expand=color&_expand=model`
        );

        const carForm = {
          year: response.data.year,
          board: response.data.board,
          model: {
            value: response.data.model.id,
            label: response.data.model.name,
          },
          color: {
            value: response.data.color.id,
            label: response.data.color.name,
          },
        };

        await formRef.current.setData(carForm);
        await formRef.current.setFieldValue('modelId', carForm.model);
        await formRef.current.setFieldValue('colorId', carForm.color);

        setCar(carForm);
      }
      findCarById();
    }
  }, []); //useEffect com o [] como segundo parametro faz com que algo aconteca apenas uma unica vez

  //Lidar com o submit do formulario
  function handleSubmit(data, { reset }) {
    saveCar(data);
    reset();
  }

  //Salva os dados
  function saveCar(car) {
    //Verifica se esta alterando ou cadastrando
    if (id === undefined) {
      api
        .post('/cars', car)
        .then(function (response) {
          console.log('Salvou: ', response);

          history.push('/carros');
        })
        .catch(function (error) {
          console.log('Ocorreu um erro', error);
        });
    } else {
      api
        .put(`/cars/${id}`, car)
        .then(function (response) {
          console.log('Salvou: ', response);

          history.push('/carros');
        })
        .catch(function (error) {
          console.log('Ocorreu um erro', error);
        });
    }
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
        />

        <Input
          type="text"
          id="board"
          name="board"
          label="Placa"
          placeholder="Ex.: ASQ-2469"
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

export default CarForm;
