import React from 'react'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import './result.css'

import TableMM1 from './tables/mm1';
import TableMMM from './tables/mmm';
import TableMMInf from './tables/mminf';
import TableMM1B from './tables/mm1b';
import TableMMMB from './tables/mmmb';
import TableMM1K from './tables/mm1k';
import TableInfik from './tables/mminfik';





const Results = () => {
  const [calc, setCalc] = React.useState('mmm1')


  function selectCalc(calc) {
    setCalc(calc)
  }

  function RenderResult() {
    switch (calc) {
      case 'mmm1':
        return <TableMM1 />
      case 'mmm':
        return <TableMMM />
      case 'mmminfinitos':
        return <TableMMInf />
      case 'mm1b':
        return <TableMM1B />
      case 'mmmb':
        return <TableMMMB />
      case 'mm1k':
        return <TableMM1K />
      case 'mminfinistok':
        return <TableInfik />
      default:
        return <TableMM1 />
    }
  }

  return (
    <div className="container-fluid">
      <div className="my-3">
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>
            Listas
              </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => selectCalc('mm1')}>M/M/1</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => selectCalc('mmm')}>M/M/m</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => selectCalc('mmminfinitos')}>M/M/(infinitos)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => selectCalc('mm1b')}>M/M/1/B</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => selectCalc('mmmb')}>M/M/m/B</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => selectCalc('mm1k')}>M/M/1/K</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => selectCalc('mminfinistok')}>M/M/(infinitos)//K</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
        <RenderResult />
    </div>
  );
}

export default Results

