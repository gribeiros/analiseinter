import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mmm1`)
  const data = await response.data
  console.log(data)
  return data
}

const TableMM1 = () => {
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
            </tr>
          </thead>
          <tbody>
            {data.map((r) => {
              { { console.log("mm1", r) } }
              return <tr>
                <td>{r.mm1.usage}</td>
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
        </div>
      : 
      <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
      
  )
}

export default TableMM1
