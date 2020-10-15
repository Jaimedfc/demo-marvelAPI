import React from 'react';
import { InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

class MyInput extends React.Component {

    //Form to call Marvel's API
    render() {
        return (
            <Form onSubmit={this.props.getCharacters}>
                <Form.Group controlId="formInput"> 
                    <InputGroup className="mb-3">
                        <FormControl
                            size = "lg"
                            type="text"
                            placeholder="Character's name"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger" type="submit"><BsSearch/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
            
        );
    }
}

export default MyInput;