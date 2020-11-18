import React from 'react'
import { Table } from 'reactstrap';

const TableMMMB = ({ data }) => {

  return (
    <Table striped>
      <thead>
        <tr>
          <th>p</th>
          <th>p0</th>
          <th>pB</th>
          <th>pN</th>
          <th>Taxa de perda</th>
          <th>Taxa de chegada</th>
          <th>Usuarios medio no sistema</th>
          <th>Média de usuários na fila</th>
          <th>Média de resposta</th>
          <th>Média de espera</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          return <tr>
            <th scope="row">{r.ro}</th>
            <td>{r.mmmb.p0}</td>
            <td>{r.mmmb.pb}</td>
            <td>{r.mmmb.pn}</td>
            <td>{r.mmmb.loss}</td>
            <td>{r.mmmb.en}</td>
            <td>{r.mmmb.enw}</td>
            <td>{r.mmmb.es}</td>
            <td>{r.mmmb.ew}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}
/*
ro, p0, pb, pn, loss, en, enw, es, ew
*/

export default TableMMMB
