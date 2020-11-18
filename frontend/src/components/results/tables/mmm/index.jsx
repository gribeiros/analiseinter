import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mmm`)
  const data = await response.data
  return data
}


const TableMMM = () => {


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
            <tr>
              <th>RO</th>
              <th>pN</th>
              <th>p0</th>
              <th>c(m, u)</th>
              <th>e[s]</th>
              <th>p_fila</th>
              <th>eN</th>
              <th>eS</th>
              <th>enN</th>
              <th>eW</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => {
              return <tr>
                <td>{r.mmm.ro}</td>
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
      </div>
      :
      <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
  )
}


export default TableMMM
