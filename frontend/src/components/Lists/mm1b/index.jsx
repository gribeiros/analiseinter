import React from 'react'
import { Form, Input } from 'reactstrap';

const MM1B = () => {
  return (
    <Form >
      <label>Lista M/M/1</label>
        <br />
        <Input placeholder="Servidores" type="number" name="Capacidade" />
        <br />
        <Input placeholder="Pacotes" type="number" name="Capacidade" />
        <br />
        <Input placeholder="Capacidade de pacotes por segundo" type="number" name="users" />
        <br />
        <Input placeholder="Chegada de pacotes por segundo" type="number" name="users" />
        <br />
        <Input placeholder="Probabilidades de n usuários no Sistema" type="number" name="users" />
        <br />
        <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MM1B
