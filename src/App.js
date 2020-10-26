import React, { Component } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="centerItem">
                 <Container />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App
