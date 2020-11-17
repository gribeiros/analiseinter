import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navc = () => {

    function handleLogout() {
        localStorage.removeItem('isLogged')
        window.location.replace("/login")
    }

    return (

        <aside className="menu-area">
            <nav className="menu">
                <Link to="./">
                    <i className="fa fa-home"></i> Inicio
            </Link>
                <Link to="/list">
                    <i className="fa fa-tasks"></i> Listas
            </Link>
                <Link to="/result">
                    <i className="fa fa-folder-open"></i> Resultados
            </Link>

            <a href="#" style={{marginTop: '39rem'}} onClick={handleLogout}>Logout</a>

            </nav>
        </aside>
    )
}

export default Navc