import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';


function Tablebooks(props) {
    return (
        <React.Fragment>
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
                 {props.books}
             </tbody>
          </Table> 
        </React.Fragment>
    )
}

export default Tablebooks

