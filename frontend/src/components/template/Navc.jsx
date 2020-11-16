import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="./">
                <i className ="fa fa-home"></i>Inicio
            </Link>
            <Link to="/list">
                <i className ="fa fa-user"></i>Listas
            </Link>
            <Link to="/result">
                <i className ="fa fa-user"></i>Resultados
            </Link>
        </nav>
    </aside>