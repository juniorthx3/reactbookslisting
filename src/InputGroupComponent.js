import React from 'react'
import {FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InputGroupComponent(props) {
    return (
        <React.Fragment>
        <FormGroup>
        <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText><FontAwesomeIcon icon={props.icon} /></InputGroupText>
                </InputGroupAddon>
                <Input type={props.type} 
                       placeholder={props.placeholder} 
                       value={props.value} 
                       onChange={props.handleChange} 
                       name={props.name} 
                />
        </InputGroup>
        </FormGroup>
        </React.Fragment>
    )
}

export default InputGroupComponent
