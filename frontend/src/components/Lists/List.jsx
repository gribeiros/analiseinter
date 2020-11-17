import React from 'react'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import CalcMm1 from './mm1/'
import CalcMm2 from './mm2/'



const List = () => {
    const [calc, setCalc] = React.useState('mm1')

    function selectCalc(calc) {
        setCalc(calc)
    }

    function RenderResult() {
        switch (calc) {
            case 'mm1':
                return <CalcMm1 />
            case 'mmm':
                return <CalcMm2 />
            case 'mminf':
                return <CalcMm2 />
            case 'mm1b':
                return <CalcMm2 />
            case 'mmmb':
                return <CalcMm2 />
            case 'mm1k':
                return <CalcMm2 />
            case 'mminfk':
                return <CalcMm2 />
            default:
                return <CalcMm1 />
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
                        <DropdownItem>M/M/(infinitos)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>M/M/1/B</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>M/M/m/B</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>M/M/1//K</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>M/M/(infinitos)//K</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
            <RenderResult />
        </div>
    )
}

export default List
