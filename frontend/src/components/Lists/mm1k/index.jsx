import React from 'react'
import { Form, Input } from 'reactstrap';

const MM1K = () => {
  return (
    <Form >
      <label>Lista M/M/1//K</label>
            <br />
            <Input placeholder="Servidores" type="number" name="Capacidade" />
            <br />
            <Input placeholder="Requisições" type="number" name="Capacidade" />
            <br />
            <Input placeholder="Usuários" type="number" name="users" />
            <br />            
            <Input placeholder="Pacotes por hora" type="number" name="users" />
            <br />
            <Input placeholder="Numero de requisições na fila" type="number" name="users" />
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MM1K
