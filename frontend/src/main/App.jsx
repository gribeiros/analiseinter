import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Navc from '../components/template/Navc'
import Routes from './Routes'
import Footer from '../components/template/Footer'



function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <Navc />;
    }
    return <Nav />;
}

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Greeting isLoggedIn={true} />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
