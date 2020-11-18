import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mm1k`)
  const data = await response.data
  return data
}
const TableMM1K = () => {

  const [data, setData] = React.useState([])



  React.useEffect(() => {
    (async () => {
      setData(await getResult())
    })();
  }, [])


  return (
    data.length > 0 ?
      <div style={{ overflowX: 'auto' }}>
        <Table striped>
          <thead>
            <label>Lista M/M/1/k</label>
            <tr>
              <th>p</th>
              <th>p0</th>
              <th>E[nW]</th>
              <th>Lambda N</th>
              <th>Utilização</th>
              <th>Lambda L</th>
              <th>e[W]</th>
              <th>eN</th>
              <th>pN</th>
              <th>eS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => {
              { { console.log("mm1k", r) } }
              return <tr>
                <td>{r.mm1k.ro}</td>
                <td>{r.mm1k.p_zero}</td>
                <td>{r.mm1k.enw}</td>
                <td>{r.mm1k.lambdan}</td>
                <td>{r.mm1k.uti}</td>
                <td>{r.mm1k.lambdal}</td>
                <td>{r.mm1k.ew}</td>
                <td>{r.mm1k.en}</td>
                <td>{r.mm1k.pn}</td>
                <td>{r.mm1k.enw}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
      : <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
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
