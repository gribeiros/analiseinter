import React from 'react'
import { Table } from 'reactstrap';

const TableMMM = ({ data }) => {

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Fila</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          return <tr>
            <th scope="row">{r.mmm.ro}</th>
            <td>{r.mmm.p2}</td>
            <td>{r.mmm.p1}</td>
            <td>{r.mmm.c}</td>
            <td>{r.mmm.e}</td>
            <td>{r.mmm.p_fila}</td>
            <td>{r.mmm.en}</td>
            <td>{r.mmm.es}</td>
            <td>{r.mmm.enn}</td>
            <td>{r.mmm.ew}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}


export default TableMMM
