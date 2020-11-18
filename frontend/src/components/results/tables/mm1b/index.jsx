import React from 'react'
import { Table } from 'reactstrap';

const TableMM1B = ({ data }) => {

  return (
    <Table striped>
      
      <thead>
      <label>Lista M/M/1/b</label>
        <tr>
          <th>Fila</th>
          <th>Taxa de Serviço Constante</th>
          <th>Last Name</th>
          <th>Taxa de Perda</th>
          <th>Fila</th>
          <th>Fila</th>
          <th>Utilização</th>
          <th>Usuarios no sistema</th>
          <th>Media de user no sistema</th>
          <th>Tempo medio de resposta</th>
          <th>Tempo medio de espera</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          { { console.log("r",r) } }
          return <tr>
            <th scope="row">{r.mmm1b.lamb_n_m}</th>
            <td>{r.mmm1b.pb}</td>
            <td>{r.mmm1b.lamb1}</td>
            <td>{r.mmm1b.p_zero}</td>
            <td>{r.mmm1b.p_n}</td>
            <td>{r.mmm1b.u1}</td>
            <td>{r.mmm1b.en}</td>
            <td>{r.mmm1b.en_w}</td>
            <td>{r.mmm1b.es}</td>
            <td>{r.mmm1b.ew}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}


export default TableMM1B
