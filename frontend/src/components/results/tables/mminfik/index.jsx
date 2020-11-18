import React from 'react'
import { Table } from 'reactstrap';

const TableMMInfK = ({ data }) => {

  return (
    <Table striped>
      <thead>
        <label>M/M/Inf/K</label>
        <tr>
          <th>Fila</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          { { console.log("r", r) } }
          return <tr>
            <th scope="row">{r.mminfinitok.lambdan}</th>
            <td>{r.mminfinitok.un}</td>
            <td>{r.mminfinitok.ro}</td>
            <td>{r.mminfinitok.en}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}

/*
lambdan, un, ro, eN
*/

export default TableMMInfK
