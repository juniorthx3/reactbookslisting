import React, { Component } from 'react'
import SearchAddBook from './SearchAddBook'
import Tablebooks from './Tablebooks'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faBook, faUserTie, faClock, faKey, faSave, faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import InputGroupComponent from './InputGroupComponent';
import ButtonComponent from './ButtonComponent'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
             books:[],
             modalNewBook:false,
             newBook:{
                 id:'',
                 title:'',
                 author:'',
                 date:''
             }
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
      this.setState({modalNewBook: !this.state.modalNewBook});
    }
    
    addBook(){
        axios.post("https://raw.githubusercontent.com/juniorthx3/booklisting/main/db.json", this.state.newBook)
        .then(response=>{
           let {books}=this.state;
           books.push(response.data);
           this.setState({books, modalNewBook:false, newBook:{
               id:'',title:'',author:'',date:''
           }})
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
                         <ButtonComponent color="primary" size="sm" className="mr-2"><FontAwesomeIcon icon={faEdit} /></ButtonComponent>
                         <ButtonComponent color="danger" size="sm"><FontAwesomeIcon icon={faTrash} /></ButtonComponent>
                     </td>
                 </tr>
            )
        })
        return (
            <div id="container">
                <Modal isOpen={this.state.modalNewBook} toggle={this.toggleModalBook}>
                    <ModalHeader toggle={this.toggleModalBook} style={{color:"black"}}>Book Registration</ModalHeader>
                    <ModalBody>
                        <InputGroupComponent icon={faKey} 
                                             type="text" 
                                             name="id"
                                             placeholder="Enter Book ID" 
                                             value={this.state.newBook.id} 
                                             handleChange={e=>{
                                                 let {newBook}=this.state;
                                                 newBook.id=e.target.value;
                                                 this.setState({newBook})
                                             }}                
                        />
                        <InputGroupComponent icon={faBook} 
                                             type="text" 
                                             name="title"
                                             placeholder="Enter Book Title" 
                                             value={this.state.newBook.title} 
                                             handleChange={e=>{
                                                let {newBook}=this.state;
                                                newBook.title=e.target.value;
                                                this.setState({newBook})
                                            }}
                        />
                        <InputGroupComponent icon={faUserTie} 
                                             type="text" 
                                             name="author"
                                             placeholder="Enter Name of Author" 
                                             value={this.state.newBook.author} 
                                             handleChange={e=>{
                                                let {newBook}=this.state;
                                                newBook.author=e.target.value;
                                                this.setState({newBook})
                                            }} 
                        />
                        <InputGroupComponent icon={faClock} 
                                             type="date"
                                             name="date"  
                                             placeholder="Enter Published Date" 
                                             value={this.state.newBook.date} 
                                             handleChange={e=>{
                                                let {newBook}=this.state;
                                                newBook.date=e.target.value;
                                                this.setState({newBook})
                                            }}        
                        />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonComponent color="primary" toggleModalBook={this.addBook.bind(this)}><FontAwesomeIcon icon={faSave} /></ButtonComponent>
                        <ButtonComponent olor="secondary" toggleModalBook={this.toggleModalBook}><FontAwesomeIcon icon={faPowerOff} /></ButtonComponent>
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

