import React from 'react'
import { Button} from 'reactstrap';

function ButtonComponent(props) {
    return (
        <React.Fragment>
            <Button color={props.color} 
                    size={props.size} 
                    name={props.name}
                    className={props.className} 
                    onClick={props.toggleModalBook}
            >
              {props.children}
            </Button>
        </React.Fragment>
    )
}

export default ButtonComponent
