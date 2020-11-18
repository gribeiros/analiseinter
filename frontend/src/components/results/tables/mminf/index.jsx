import React from 'react'
import { Table, Spinner } from 'reactstrap';
import axios from 'axios'

async function getResult() {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/mmminfinitos`)
  const data = await response.data
  return data
}

const TableMMInf = () => {

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
            <label>Lista M/M/Inf</label>
            <tr>
              <th>P</th>
              <th>pN</th>
              <th>E[n]</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => {
              { { console.log("r", r) } }
              return <tr>
                <td>{Number(r.mminfinito.ro).toFixed(2)}</td>
                <td>{Number(r.mminfinito.pn).toFixed(2)}</td>
                <td>{Number(r.mminfinito.es).toFixed(2)}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
      : <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
  )
}
/*
ro, pn, es
*/
export default TableMMInf
