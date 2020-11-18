import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'



const MMM = () => {

  const [form, setForm] = React.useState({ m: '', y: '', u: '' })


  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()


    const { m, y, u } = form
    const id = localStorage.getItem('user_id')


    const response = await axios.post('http://localhost:8080/list/mmm', { m, y, u, user_id: id })
    if (response.status === 200) {
      window.location.replace('/results')
    }
    else {
      alert('Falha ao registrar')
    }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>Lista M/M/m</label>
      <br />
      <Input placeholder="Servidores" type="number" name="m" value={form.m} onChange={handleForm} />
      <br />
      <Input placeholder="Requisições por minuto" type="number" name="y" value={form.y} onChange={handleForm} />
      <br />
      <Input placeholder="Processamento" type="number" name="u" value={form.u} onChange={handleForm} />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMM
