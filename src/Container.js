import React from 'react'
import SearchAddBook from './SearchAddBook'
import Tablebooks from './Tablebooks'

function Container() {
    return (
        <div id="container">
           <div>
            <SearchAddBook />
            <Tablebooks />
           </div>
        </div>
    )
}

export default Container
