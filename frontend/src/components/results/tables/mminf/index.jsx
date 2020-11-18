import React from 'react'
import { Table } from 'reactstrap';

const TableMMInf = ({ data }) => {

  return (
    <Table striped>
      <thead>
        <label>Lista M/M/Inf</label>
        <tr>
          <th>Fila</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          { { console.log("r", r) } }
          return <tr>
            <th scope="row">{r.mminfinito.ro}</th>
            <td>{r.mminfinito.pn}</td>
            <td>{r.mminfinito.es}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}
/*
ro, pn, es
*/
export default TableMMInf
