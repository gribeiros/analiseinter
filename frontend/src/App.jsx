import React from 'react'

import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'

function App(props) {
    return (
        <div>
            <Header />
            <Article />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App