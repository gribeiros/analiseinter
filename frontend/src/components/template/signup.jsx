import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './signup.css'

export default class SignUp extends Component {
    render() {
        return (
            <Container className="container">
                <Row>
                    <Col className="registrar">
                        <form>
                            <h3>Registrar</h3>
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>CPF</label>
                                <input type="CPF" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block">Registrar</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}