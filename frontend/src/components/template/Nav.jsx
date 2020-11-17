import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="./">
                <i className ="fa fa-home"></i> Inicio
            </Link>
            <Link to="/login">
                <i className ="fa fa-sign-in"></i> Login
            </Link>
            <Link to="/registrar">
                <i className ="fa fa-user-plus"></i> Registrar
            </Link>
        </nav>
    </aside>