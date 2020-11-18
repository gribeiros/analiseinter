import React from 'react'
import { Table } from 'reactstrap';

const TableMM1K = ({ data }) => {

  return (
    <Table striped>
      <thead>
      <label>Lista M/M/1/k</label>
        <tr>
          <th>Fila</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Fila</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Fila</th>
          <th>First Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => {
          { { console.log("r",r) } }
          return <tr>
            <th scope="row">{r.mm1k.p_zero}</th>
            <td>{r.mm1k.ro}</td>
            <td>{r.mm1k.lambdan}</td>
            <td>{r.mm1k.pn}</td>
            <td>{r.mm1k.enw}</td>
            <td>{r.mm1k.en}</td>
            <td>{r.mm1k.uti}</td>
            <td>{r.mm1k.lambdal}</td>
            <td>{r.mm1k.ew}</td>
            <td>{r.mm1k.es}</td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}

/*
p_zero, 
ro, 
lambdan, 
pn, 
enw, 
en, 
uti, 
lambdal, 
ew, 
es
*/
export default TableMM1K
