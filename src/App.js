import React, { Component } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:"",
            title:"",
            author:"",
            releaseDate:"",
            coverImage:""
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                {/* 
                <Book /> */}
                <div className="centerItem">
                 <Container />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App
