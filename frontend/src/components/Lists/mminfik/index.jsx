import React from 'react'
import { Form, Input } from 'reactstrap';

const MMINFK = () => {
  return (
    <Form >
      <label>Lista M/M/(infinitos)//K</label>
            <br />
            <Input placeholder="Taxa media de requisição" type="number" name="Capacidade" />
            <br />
            <Input placeholder="Total de usuário no banco" type="number" name="Capacidade" />
            <br />
            <Input placeholder="Limite de requisições" type="number" name="users" />
            <br />
            <Input placeholder="Probabilidade de usuários no servidor" type="number" name="users"/>
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMINFK
