import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'


const MMINFK = () => {

  const [form, setForm] = React.useState({ lambda: '', u: '', K: '', n: '' })


  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()


    const { lambda, u, K, n } = form
    const id = localStorage.getItem('user_id')


    const response = await axios.post('http://localhost:8080/list/minfinitosk', { lambda, u, K, n, user_id: id })
    if (response.status === 200) {
      window.location.replace('/results')
    }
    else {
      alert('Falha ao registrar')
    }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>Lista M/M/(infinitos)//K</label>
      <br />
      <Input placeholder="Taxa media de requisição" type="number" name="lambda" value={form.lambda} onChange={handleForm} />
      <br />
      <Input placeholder="Total de usuário no banco" type="number" name="u" value={form.u} onChange={handleForm} />
      <br />
      <Input placeholder="Limite de requisições" type="number" name="K" value={form.K} onChange={handleForm} />
      <br />
      <Input placeholder="Probabilidade de usuários no servidor" type="number" name="n" value={form.n} onChange={handleForm} />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
    </Form>
  )
}

export default MMINFK
