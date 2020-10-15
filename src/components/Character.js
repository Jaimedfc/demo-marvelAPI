import React from 'react';
import {Card, Button } from 'react-bootstrap';
import MyModal from './MyModal';

class Character extends React.Component {

    state = {
        showModal:false   //Boolean to control modals
    };

    constructor(props){
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () =>{
        this.setState({showModal:true});
    }

    hideModal = () =>{
        this.setState({showModal:false});
    }

    render() {

        let character = this.props.character;
        let img = character.thumbnail.path+'/standard_xlarge.'+character.thumbnail.extension;  //src of character's img
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>{character.description}</Card.Text>
                        <Button variant="primary" onClick={this.showModal}>Show me more!</Button>
                    </Card.Body>
                </Card>
                <MyModal character={character} isShown={this.state.showModal} show={this.showModal} hide={this.hideModal}/>
            </div>
            
        );
    }
}

export default Character;