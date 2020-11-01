import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Entrar</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="email" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="senha" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    Esqueci minha <a href="#">senha?</a>
                </p>
            </form>
        );
    }
}