import React from 'react'
import { Form, Input } from 'reactstrap';
import axios from 'axios'


const MM1 = () => {

    const [form, setForm] = React.useState({ requisits: '', capacity: '', users: '' })


    function handleForm(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const { requisits, capacity, users } = form
        const id = localStorage.getItem('user_id')

        const response = await axios.post('http://localhost:8080/list/mm1', { requisits, capacity, users, user_id: id })
        if (response.status === 200) {
        window.location.replace('/results')
        }
        else {
            alert('Falha ao registrar')
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <label>Lista M/M/1</label>
            <br />
            <Input placeholder="Requisições" type="number" name="requisits" value={form.requisits} onChange={handleForm} />
            <br />
            <Input placeholder="Capacidade" type="number" name="capacity" value={form.capacity} onChange={handleForm} />
            <br />
            <Input placeholder="Usuários" type="number" name="users" value={form.users} onChange={handleForm} />
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">Calcular</button>
        </Form>
    )
}

export default MM1
