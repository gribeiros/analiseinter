import React from 'react'
import { Table } from 'reactstrap';

const TableMM1 = ({ data }) => {

  console.log('aa', data)

  return (
    <Table striped>     
      <thead>
      <label>Lista M/M/1</label>
        <tr>
          <th>Intensidade</th>
          <th>N usuarios no sistema</th>
          <th>5 usuarios no sistema</th>
          <th>5 usuarios ou mais usuários</th>
          <th>um ou mais usuarios no sistema</th>
          <th>Tempo médio de resposta</th>
          <th>Tempo médio de espera na fila</th>
          <th>Número médio de usuários</th>
          <th>Número médio de requisições na fila</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          { { console.log("r",r) } }
          return <tr>
            <th scope="row">{r.mm1.usage}</th>
            <td>{r.mm1.zero_user}</td>
            <td>{r.mm1.n_user}</td>
            <td>{r.mm1.more_users}</td>
            <td>{r.mm1.more_than_one_users}</td>
            <td>{r.mm1.resposta}</td>
            <td>{r.mm1.waiting}</td>
            <td>{r.mm1.media_user1}</td>
            <td>{r.mm1.req_fila}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}

export default TableMM1
