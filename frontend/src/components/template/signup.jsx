import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './signup.css'
import axios from 'axios'


const SignUp = () => {

    const [form, setForm] = React.useState({ nome: '', email: '', cpf: '', password: '' })


    function handleForm(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const { name, email, cpf, password } = form

        console.log({ name, email, cpf, password })

        const response = await axios.post('http://localhost:8080/user', { name, email, cpf, password })

        if (response.status === 200) {
            alert('Registrado')
            window.location.replace("/login")
        }
        else {
            alert('Falha ao registrar')
        }

    }

    return (
        <Container className="container">
            <Row>
                <Col className="registrar">
                    <form onSubmit={handleSubmit}>
                        <h3>Registrar</h3>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={form.name} onChange={handleForm} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={form.email} onChange={handleForm} />
                        </div>

                        <div className="form-group">
                            <label>CPF</label>
                            <input type="cpf" className="form-control" name="cpf" value={form.cpf} onChange={handleForm} />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" name="password" value={form.password} onChange={handleForm} />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Registrar</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp