import React, { Component } from 'react'
import SearchAddBook from './SearchAddBook'
import Tablebooks from './Tablebooks'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button} from 'reactstrap';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
             books:[]
        }
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/juniorthx3/booklisting/main/db.json")
            .then(response=>{
                this.setState({books:response.data})
                console.log(this.state.books);
            })
    }
    
    render() {
        let books=this.state.books.map(book=>{
            return (
                <tr>
                     <td>{book.ID}</td>
                     <td>{book.title}</td>
                     <td>{book.author}</td>
                     <td>{book.published}</td>
                     <td>
                         <Button color="primary" size="sm" className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button>
                         <Button color="danger" size="sm"><FontAwesomeIcon icon={faTrash} /></Button>
                     </td>
                 </tr>
            )
        })
        return (
            <div id="container">
                <div>
                    <SearchAddBook />
                    <Tablebooks books={books} />
                </div>
          </div>
        )
    }
}

export default Container

