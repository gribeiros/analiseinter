import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';



import {LoggedContext} from '../../hooks/context'

function Loginx() {
  const [form, setForm] = React.useState({ email: '', password: '' })
  
  const {login} = React.useContext(LoggedContext)

  function handleForm(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    login(form.email, form.password)
  }

  return (
    <Container className="container">
      <Row>
        <Col className="registrar">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleForm} />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input type="password" className="form-control" name="password" value={form.password} onChange={handleForm} />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Loginx;