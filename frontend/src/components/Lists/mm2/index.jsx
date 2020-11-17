import React from 'react'
import { Form, Input } from 'reactstrap';

const CalcMm2 = () => {
  return (
    <Form>
      <Input type="number" bsSize="lg">
        <option>TEEEEEEEEESTE</option>
      </Input>
      <br />
      <Input type="select">
        <option>Default Select</option>
      </Input>
      <br />
      <Input type="select" bsSize="sm">
        <option>Small Select</option>
      </Input>
    </Form>
  )
}

export default CalcMm2
