import React from 'react'
import Header from '../../components/Header'
import Article from '../../components/Article'
import Footer from '../../components/Footer'


import { BrowserRouter as Router } from "react-router-dom";

import './Home.css'

function Home(props) {
    return (
        <Router>
            <div className="Home">
                <Header />
                <Article />
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    )
}
export default Home