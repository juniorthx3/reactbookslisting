import React, { Component } from 'react'
import Header from './Header'
import SearchBook from './SearchBook'
import Container from './Container'

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
            </React.Fragment>
        )
    }
}

export default App
