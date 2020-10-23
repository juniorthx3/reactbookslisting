import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class Tablebooks extends Component {
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
            <div>
           <Table>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>TITLE</th>
                     <th>AUTHOR</th>
                     <th>PUBLISHED</th>
                     <th>[]</th>
                 </tr>
             </thead>
             <tbody>
                 {books}
             </tbody>
          </Table> 
        </div>
        )
    }
}

export default Tablebooks
