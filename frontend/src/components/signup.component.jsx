import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registrar</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Registrar</button>
                <p className="forgot-password text-right">
                    Já é registrado? <a href="#">Entrar</a>
                </p>
            </form>
        );
    }
}