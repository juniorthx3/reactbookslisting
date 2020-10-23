import React, { Component } from 'react'
import SearchAddBook from './SearchAddBook'
import Tablebooks from './Tablebooks'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
             books:[],
             modalNewBook:false
        }
        this.toggleModalBook=this.toggleModalBook.bind(this);
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/juniorthx3/booklisting/main/db.json")
            .then(response=>{
                this.setState({books:response.data})
                console.log(this.state.books);
            })
    }
    toggleModalBook(){
      this.setState({modalNewBook: true});
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
      <Modal isOpen={this.state.modalNewBook} toggle={this.toggleModalBook}>
        <ModalHeader toggle={this.toggleModalBook}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModalBook}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggleModalBook}>Cancel</Button>
        </ModalFooter>
      </Modal>
                <div>
                    <SearchAddBook modalNewBook={this.toggleModalBook} />
                    <Tablebooks books={books} />
                </div>
          </div>
        )
    }
}

export default Container

