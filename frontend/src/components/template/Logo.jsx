import  './Logo.css'
import logo from '../../assests/imgs/brabus.svg'
import React from 'react'
import {Link} from 'react-router-dom'


export default props =>
    <aside className="logo">
        <Link className="logo" to="/">
            <img src={logo} alt="Logo"/>
        </Link>
    </aside>