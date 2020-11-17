import React from 'react'
import { Form, Input } from 'reactstrap';

const mminf = () => {
  return (
    <Form>
      <Input placeholder="mm2" bsSize="lg" />
      <Input placeholder="default" />
      <Input placeholder="sm" bsSize="sm" />
      <Input type="select" bsSize="lg">
        <option>TEEEEEEEEESTE</option>
      </Input>
      <Input type="select">
        <option>Default Select</option>
      </Input>
      <Input type="select" bsSize="sm">
        <option>Small Select</option>
      </Input>
    </Form>
  )
}

export default mminf
