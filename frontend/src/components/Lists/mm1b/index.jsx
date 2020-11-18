import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'

const MM1B = () => {


  const [form, setForm] = React.useState({ requisits: '', capacity: '', users: '' })


  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const user = localStorage.getItem('user');


    const { requisits, capacity, users } = form
    const id = localStorage.getItem('user_id')
    console.log(id)

    const response = await axios.post('http://localhost:8080/list/mm1', { requisits, capacity, users, name: "mm1b", user_id: id })
    if (response.status === 200) {
      window.location.replace('/results')
    }
    else {
      alert('Falha ao registrar')
    }

  }

  return (
    <Form >
      <label>Lista M/M/1/B</label>
      <br />
      <Input placeholder="Servidores" type="number" name="Capacidade" />
      <br />
      <Input placeholder="Pacotes" type="number" name="Capacidade" />
      <br />
      <Input placeholder="Capacidade de pacotes por segundo" type="number" name="users" />
      <br />
      <Input placeholder="Chegada de pacotes por segundo" type="number" name="users" />
      <br />
      <Input placeholder="Probabilidades de n usuários no Sistema" type="number" name="users" />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MM1B
