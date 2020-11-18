import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'


const MMINF = () => {

  const [form, setForm] = React.useState({ y: '', u: '', n: '', porc: '' })


  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()


    const { y, u, n, porc } = form
    const id = localStorage.getItem('user_id')


    const response = await axios.post('http://localhost:8080/list/minfinitos', { y, u, n, porc, user_id: id })
    if (response.status === 200) {
      window.location.replace('/results')
    }
    else {
      alert('Falha ao registrar')
    }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>Lista M/M/(infinitos)</label>
      <br />
      <Input placeholder="Chegada de clientes" type="number" name="y" value={form.y} onChange={handleForm} />
      <br />
      <Input placeholder="Taxa de serviço" type="number" name="u" value={form.u} onChange={handleForm} />
      <br />
      <Input placeholder="Probabilidade de usuários no servidor" type="number" name="n" value={form.n} onChange={handleForm} />
      <br />
      <Input placeholder="Probabilidade de existir cliente no servidor" type="number" name="porc" value={form.porc} onChange={handleForm} />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMINF
