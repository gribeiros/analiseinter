import React from 'react'
import axios from 'axios'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Spinner } from 'reactstrap';

import './result.css'

import TableMM1 from './tables/mm1';
import TableMMM from './tables/mmm';
import TableMMInf from './tables/mminf';
import TableMM1B from './tables/mm1b';
import TableMMMB from './tables/mmmb';
import TableMM1K from './tables/mm1k';
import TableInfik from './tables/mminfik';


async function getResult(fila) {
  const response = await axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + `/list/${fila}`)
  const data = await response.data
  return data
}


const Results = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    (async () => {
      setData(await getResult('mmm1'))
      //setData(await getResult('mmm'))
      //setData(await getResult('mmminfinitos'))
      //setData(await getResult('mm1b'))
      //setData(await getResult('mmmb'))
      //setData(await getResult('mm1k'))
      //setData(await getResult('mminfinistok'))
    })();
  }, [])

  function RenderResult({ data }) {
    switch (data[0].name) {
      case 'mmm1':
        return <TableMM1 data={data} />
      case 'mmm':
        return <TableMMM data={data} />
      case 'mmminfinitos':
        return <TableMMInf data={data} />
      case 'mm1b':
        return <TableMM1B data={data} />
      case 'mmmb':
        return <TableMMMB data={data} />
      case 'mm1k':
        return <TableMM1K data={data} />
      case 'mminfinistok':
        return <TableInfik data={data} />
      default:
        return <TableMM1 data={data} />
    }
  }

  return (
    <div className="container">
      <div className="my-3">
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>
            Listas
              </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setData(getResult('mm1'))}>M/M/1</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => setData(getResult('mmm'))}>M/M/m</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => setData(getResult('mmminfinitos'))}>M/M/(infinitos)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => setData(getResult('mm1b'))}>M/M/1/B</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => setData(getResult('mmmb'))}>M/M/m/B</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => setData(getResult('mm1k'))}>M/M/1/K</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => setData(getResult('mminfinistok'))}>M/M/(infinitos)//K</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      { data.length > 0 ?
        <RenderResult data={data} />
        :
        <div className="loading-div"><Spinner style={{ width: '4rem', height: '4rem' }} /></div>
      }
    </div>
  );
}

export default Results

