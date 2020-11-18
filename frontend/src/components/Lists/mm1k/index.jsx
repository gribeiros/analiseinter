import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'


const MM1K = () => {


  const [form, setForm] = React.useState({ m: '', lambda: '', u: '', K: '', n: '' })


  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()


    const { m, lambda, u, K, n } = form
    const id = localStorage.getItem('user_id')


    const response = await axios.post('http://localhost:8080/list/mm1k', { m, lambda, u, K, n, user_id: id })
    if (response.status === 200) {
      window.location.replace('/results')
    }
    else {
      alert('Falha ao registrar')
    } 

  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>Lista M/M/1//K</label>
      <br />
      <Input placeholder="Servidores" type="number" name="m" value={form.m} onChange={handleForm} />
      <br />
      <Input placeholder="Requisições" type="number" name="lambda" value={form.lambda} onChange={handleForm} />
      <br />
      <Input placeholder="Usuários" type="number" name="u" value={form.u} onChange={handleForm} />
      <br />
      <Input placeholder="Pacotes por hora" type="number" name="K" value={form.K} onChange={handleForm} />
      <br />
      <Input placeholder="Numero de requisições na fila" type="number" name="n" value={form.n} onChange={handleForm} />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MM1K
