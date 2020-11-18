import React from 'react'
import { Form, Input } from 'reactstrap';

const MMINF = () => {
  return (
    <Form >
      <label>Lista M/M/1</label>
            <br />
            <Input placeholder="Chegada de clientes" type="number" name="clientes" />
            <br />
            <Input placeholder="Taxa de serviço" type="number" name="taxa" />
            <br />
            <Input placeholder="Probabilidade de usuários no servidor" type="number" name="ProbUsers" />
            <br />
            <Input placeholder="Probabilidade de existir cliente no servidor" type="number" name="ProbCliente" />
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMINF
