import React from 'react'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import MM1 from './mm1/'
import MM1B from './mm1b/'
import MM1K from './mm1k/'
import MMINF from './mminf/'
import MMINFK from './mminfik/'
import MMMB from './mmmb/'
import MMM from './mmm/'



const List = () => {
    const [calc, setCalc] = React.useState('mm1')

    function selectCalc(calc) {
        setCalc(calc)
    }

    function RenderResult() {
        switch (calc) {
            case 'MM1':
                return <MM1 />
            case 'mmm':
                return <MMM />
            case 'MMINF':
                return <MMINF />
            case 'MM1B':
                return <MM1B />
            case 'MMMB':
                return <MMMB />
            case 'MM1K':
                return <MM1K />
            case 'MMINFK':
                return <MMINFK />
            default:
                return <MM1 />
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
                        <DropdownItem onClick={() => selectCalc('mm1')}>M/M/1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => selectCalc('mmm')}>M/M/m</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => selectCalc('MMINF')}>M/M/(infinitos)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => selectCalc('MM1B')}>M/M/1/B</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => selectCalc('MMMB')}>M/M/m/B</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => selectCalc('MM1K')}>M/M/1/K</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => selectCalc('MMINFK')}>M/M/(infinitos)//K</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
            <RenderResult />
        </div>
    )
}

export default List
