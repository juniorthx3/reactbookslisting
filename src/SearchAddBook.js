import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus} from '@fortawesome/free-solid-svg-icons'
import { Button, Input} from 'reactstrap';

function SearchAddBook() {
    return (
        <div className="search">
            <div>
             <Button outline size="lg"><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
            <div className="sameline">
             <Input type="text" style={{height:"40px", }} size="35" placeholder="Enter the name of the book" />
             <Button outline color="info"><FontAwesomeIcon icon={faSearch} /></Button>
            </div>
         
        </div>
    )
}

export default SearchAddBook
