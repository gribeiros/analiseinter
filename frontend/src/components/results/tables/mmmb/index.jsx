import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mmmb`)
  const data = await response.data
  return data
}
const TableMMMB = () => {


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
                <td>{r.mmmb.ro}</td>
                <td>{r.mmmb.p0}</td>
                <td>{r.mmmb.pb}</td>
                <td>{r.mmmb.pn}</td>
                <td>{r.mmmb.loss}</td>
                <td>{r.mmmb.lambda_l}</td>
                <td>{r.mmmb.en}</td>
                <td>{r.mmmb.enw}</td>
                <td>{r.mmmb.es}</td>
                <td>{r.mmmb.ew}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
      :
      <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
  )
}
/*
ro, p0, pb, pn, loss, en, enw, es, ew
*/

export default TableMMMB
