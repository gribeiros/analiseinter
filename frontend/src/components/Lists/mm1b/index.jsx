import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'

const MM1B = () => {


  const [form, setForm] = React.useState({ m: '', B: '', lamb: '', u: '', n: '' })


  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()


    const { m, B, lamb, u, n } = form
    const id = localStorage.getItem('user_id')


    const response = await axios.post('http://localhost:8080/list/mm1b', { m, B, lamb, u, n, user_id: id })
    if (response.status === 200) {
      window.location.replace('/results')
    }
    else {
      alert('Falha ao registrar')
    }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>Lista M/M/1/B</label>
      <br />
      <Input placeholder="Servidores" type="number" name="m" value={form.m} onChange={handleForm} /> 
      <br />
      <Input placeholder="Pacotes" type="number" name="B" value={form.B} onChange={handleForm} />
      <br />
      <Input placeholder="Capacidade de pacotes por segundo" type="number" name="lamb" value={form.lamb} onChange={handleForm} />
      <br />
      <Input placeholder="Chegada de pacotes por segundo" type="number" name="u" value={form.u} onChange={handleForm} />
      <br />
      <Input placeholder="Probabilidades de n usuários no Sistema" type="number" name="n" value={form.n} onChange={handleForm} />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MM1B
