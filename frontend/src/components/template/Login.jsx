import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function Loginx() {
  return (
    <Container className="container">
      <Row>
        <Col className="registrar">
          <form>
            <h3>Login</h3>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input type="CPF" className="form-control" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Loginx;