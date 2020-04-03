import React, { useRef } from 'react';
import { Form } from '@unform/web';

import Input from '../../../components/Unform/Cadastro/Input';
import Card from '../../../components/Card';

export default function CarForm() {
  const formRef = useRef(null);
  return (
    <div>
      <div className="card">
        <Form ref={formRef}>
          <Input
            type="text"
            id="nome"
            name="nome"
            label="Nome"
            placeholder="Ex.: Paracetamol"
            required
          />

          <Input
            type="text"
            id="dosagem"
            name="dosagem"
            label="Dosagem"
            placeholder="Ex.: 500g"
            required
          />

          <Input
            type="text"
            id="dataVencimento"
            name="dataVencimento"
            label="Data de Vencimento"
            required
          />
        </Form>
      </div>
    </div>
  );
}
