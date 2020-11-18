import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mm1b`)
  const data = await response.data

  return data
}

const Tablemmm1b = () => {
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
            <label>Lista M/M/1/b</label>
            <tr>
              <th>Taxa de Serviço Constante</th>
              <th>Taxa de Perda</th>
              <th>p0</th>
              <th>pN</th>
              <th>Utilização</th>
              <th>Usuarios no sistema</th>
              <th>Media de user no sistema</th>
              <th>Tempo medio de resposta</th>
              <th>Tempo medio de espera</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => {
              { { console.log("mm1b", r) } }
              return <tr>
                <td>{Number(r.mmm1b.pb).toFixed(2)}</td>
                <td>{Number(r.mmm1b.lamb1).toFixed(2)}</td>
                <td>{Number(r.mmm1b.p_zero).toFixed(2)}</td>
                <td>{Number(r.mmm1b.p_n).toFixed(2)}</td>
                <td>{Number(r.mmm1b.u1).toFixed(2)}</td>
                <td>{Number(r.mmm1b.en).toFixed(2)}</td>
                <td>{Number(r.mmm1b.en_w).toFixed(2)}</td>
                <td>{Number(r.mmm1b.es).toFixed(2)}</td>
                <td>{Number(r.mmm1b.ew).toFixed(2)}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
      : <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
  )
}


export default Tablemmm1b
