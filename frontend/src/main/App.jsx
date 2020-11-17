/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
//const axios = require('axios');

import {LoginContext} from '../hooks/context'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Navc from '../components/template/Navc'
import Routes from './Routes'
import Footer from '../components/template/Footer'

const isLoggedIn = localStorage.getItem('isLogged');

function Greeting(props) {
    if (isLoggedIn) {
        return <Navc />;
    }
    return <Nav />;
}

export default props =>
    <LoginContext>
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Greeting isLoggedIn={isLoggedIn} />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    </LoginContext>
