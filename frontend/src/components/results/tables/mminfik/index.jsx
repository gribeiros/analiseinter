import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mminfinistok`)
  const data = await response.data
  return data
}

const TableMMInfK = () => {

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
            <label>M/M/Inf/K</label>
            <tr>
              <th>Lambda N</th>
              <th>uN</th>
              <th>Intensidade de tráfego</th>
              <th>Clientes no sistema</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => {
              { { console.log("r", r) } }
              return <tr>
                <td>{r.mminfinitok.lambdan}</td>
                <td>{r.mminfinitok.un}</td>
                <td>{r.mminfinitok.ro}</td>
                <td>{r.mminfinitok.en}</td>
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
lambdan, un, ro, eN
*/

export default TableMMInfK
