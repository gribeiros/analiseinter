import React from 'react'
import { Form, Input } from 'reactstrap';

const MMM = () => {
  return (
    <Form >
      <label>Lista M/M/m</label>
            <br />
            <Input placeholder="Servidores" type="number" name="Servidores" />
            <br />
            <Input placeholder="Requisições por minuto" type="number" name="Capacidade" />
            <br />
            <Input placeholder="Processamento" type="number" name="Processamento" />
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMM
