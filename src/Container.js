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
             newBook:{id:'', title:'', author:'', published:''},
             modalEditBook:false,
             editBook:{id:'', title:'', author:'', published:''}
        }
        this.toggleModalBook=this.toggleModalBook.bind(this);
        this.toggleModalEditBook=this.toggleModalEditBook.bind(this);
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/juniorthx3/booklisting/main/db.json")
             .then(response=>{ this.setState({books:response.data.books})})    
    }

    toggleModalBook(){
      this.setState({modalNewBook: !this.state.modalNewBook});
    }
    
    toggleModalEditBook(){
        this.setState({modalEditBook: !this.state.modalEditBook});
    }
    
    addBook(){
        axios.post("https://my-json-server.typicode.com/juniorthx3/booklisting/books", this.state.newBook)
        .then(response=>{
            let {books}=this.state;
            books.push(response.data);
            this.setState({books, modalNewBook:false, newBook:{
               id:'',title:'',author:'',published:''
            }})
             
        })
        .catch(err=>console.log(err));
    }

    editBook(id, title, author, published){
        this.setState({editBook:{id, title, author, published}, modalEditBook: !this.state.modalEditBook})
    }
    updateBook(){
        let {title, author, published}=this.state.editBook;
       axios.put("https://my-json-server.typicode.com/juniorthx3/booklisting/books" + this.state.editBook.id, {title, author, published})
            .then(response=>{
               console.log(response.data);
            })
    }
    
    render() {
        let books=this.state.books.map((book, id, index)=>{
            return (
                <tr>
                     <td>{book.id}</td>
                     <td>{book.title}</td>
                     <td>{book.author}</td>
                     <td>{book.published}</td>
                     <td>
                         <ButtonComponent color="primary" 
                                          size="sm" 
                                          className="mr-2"
                                          toggleModalBook={this.editBook.bind(this, book.id, book.title, book.author,book.published)}
                        >
                                <FontAwesomeIcon icon={faEdit} />
                        </ButtonComponent>
                         <ButtonComponent color="danger" 
                                          size="sm"
                         >
                                <FontAwesomeIcon icon={faTrash} />
                        </ButtonComponent>
                     </td>
                 </tr>
            )
        })
        return (
            <div id="container">
                {/* ADD A BOOK MODAL */}
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
                                             disabled             
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
                                                newBook.published=e.target.value;
                                                this.setState({newBook})
                                            }}        
                        />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonComponent color="primary" 
                                         toggleModalBook={this.addBook.bind(this)}
                        >
                            <FontAwesomeIcon icon={faSave} /></ButtonComponent>
                        <ButtonComponent color="secondary" 
                                         toggleModalBook={this.toggleModalBook}
                        >
                            <FontAwesomeIcon icon={faPowerOff} />
                        </ButtonComponent>
                    </ModalFooter>
                </Modal>
                {/* EDIT A BOOK MODAL */}
                <Modal isOpen={this.state.modalEditBook} toggle={this.toggleModalEditBook}>
                    <ModalHeader toggle={this.toggleModalEditBook} style={{color:"black"}}>Edit Book</ModalHeader>
                    <ModalBody>
                    <InputGroupComponent icon={faKey} 
                                             type="text" 
                                             name="id"
                                             placeholder="Enter Book ID" 
                                             value={this.state.editBook.id} 
                                             handleChange={e=>{
                                                 let {editBook}=this.state;
                                                 editBook.id=e.target.value;
                                                 this.setState({editBook})
                                             }}                
                        />
                        <InputGroupComponent icon={faBook} 
                                             type="text" 
                                             name="title"
                                             placeholder="Enter Book Title" 
                                             value={this.state.editBook.title} 
                                             handleChange={e=>{
                                                let {editBook}=this.state;
                                                editBook.title=e.target.value;
                                                this.setState({editBook})
                                            }}
                        />
                        <InputGroupComponent icon={faUserTie} 
                                             type="text" 
                                             name="author"
                                             placeholder="Enter Name of Author" 
                                             value={this.state.editBook.author} 
                                             handleChange={e=>{
                                                let {editBook}=this.state;
                                                editBook.author=e.target.value;
                                                this.setState({editBook})
                                            }} 
                        />
                        <InputGroupComponent icon={faClock} 
                                             type="date"
                                             name="date"  
                                             placeholder="Enter Published Date" 
                                             value={this.state.editBook.date} 
                                             handleChange={e=>{
                                                let {editBook}=this.state;
                                                editBook.published=e.target.value;
                                                this.setState({editBook})
                                            }}        
                        />
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.updateBook.bind(this)}>EDIT</button>
                        <ButtonComponent color="primary" 
                                         toggleModalBook={this.updateBook.bind(this)}
                        >
                            <FontAwesomeIcon icon={faEdit} /></ButtonComponent>
                        <ButtonComponent color="secondary" 
                                         toggleModalBook={this.toggleModalEditBook}
                        >
                            <FontAwesomeIcon icon={faPowerOff} />
                        </ButtonComponent>
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

