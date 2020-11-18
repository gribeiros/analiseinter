import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navc = () => {

    function handleLogout() {
        localStorage.removeItem('isLogged')
        localStorage.removeItem('user')
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_cpf')
        localStorage.removeItem('user_email')
        localStorage.removeItem('user_name')
        window.location.replace("/login")
    }

    return (

        <aside className="menu-area">
            <nav className="menu">
                <Link to="./">
                    <i className="fa fa-home"></i> Inicio
            </Link>
                <Link to="/user">
                    <i className="fa fa-user-circle-o"></i> Meu Perfil
            </Link>
                <Link to="/list">
                    <i className="fa fa-list"></i> Listas
            </Link>
                <Link to="/results">
                    <i className="fa fa-folder-open"></i> Resultados
            </Link>

                <a href="#" style={{ marginTop: '34.5rem' }} onClick={handleLogout}>Logout</a>

            </nav>
        </aside>
    )
}

export default Navc