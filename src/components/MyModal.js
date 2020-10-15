import React from 'react';
import {Modal, Button, Container, Row, Col } from 'react-bootstrap';

class MyModal extends React.Component {

    // Modal rendering--- 3 columns to render 3 lists: Series, comics and events related to the character 
    render() {

        let character = this.props.character;
        //Mapping JSON arrays to list items 
        let series = character.series.available>0 ? character.series.items.map((item, index) =>{
            return (<li key={"series"+index}>{item.name}</li>)
        }) : "Woops! There are no series available!";
        let comics = character.comics.available>0 ? character.comics.items.map((item, index) =>{
            return (<li key={"comics"+index}>{item.name}</li>)
        }) : "Woops! There are no comics available!";
        let events = character.events.available>0 ? character.events.items.map((item, index) =>{
            return (<li key={"events"+index}>{item.name}</li>)
        }) : "Woops! There are no events available!";
        return (
            <Modal show={this.props.isShown} centered size="lg" onHide={this.props.hide}>
                <Modal.Header className="justify-content-center">
                <Modal.Title>{character.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <h3>Some series:</h3>
                                <ul>{series}</ul>
                                <h4>Total available: {character.series.available}</h4>
                            </Col>
                            <Col>
                                <h3>Some comics:</h3>
                                <ul>{comics}</ul>
                                <h4>Total available: {character.comics.available}</h4>
                            </Col>
                            <Col>
                                <h3>Some events:</h3>
                                <ul>{events}</ul>
                                <h4>Total available: {character.events.available}</h4>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                <Button variant="secondary" onClick={this.props.hide}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MyModal;