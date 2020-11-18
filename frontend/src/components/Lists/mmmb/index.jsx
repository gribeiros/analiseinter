import React from 'react'
import { Form, Input } from 'reactstrap';

const MMMB = () => {
  return (
    <Form >
      <label>Lista M/M/1</label>
            <br />
            <Input placeholder="Servidores" type="number" name="Capacidade"  />
            <br />
            <Input placeholder="Pacotes" type="number" name="Capacidade"  />
            <br />
            <Input placeholder="Pacotes enviados" type="number" name="users"  />
            <br />
            <Input placeholder="Pacotes por segundo" type="number" name="users"  />
            <br />
            <Input placeholder="Probabilidades de n usuários no Sistema" type="number" name="users"  />
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMMB
