import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col} from 'react-bootstrap';
import MyInput from './components/MyInput';
import Character from './components/Character';
const axios = require('axios');

class App extends React.Component {

  state = {
    characters:[], //Character list
    error:""       //If API call fails...
  };

  constructor(props){
    super(props);
    this.getCharacters = this.getCharacters.bind(this);
  }

  //API call function--Sets state.character variable
  getCharacters = (e) => {
    e.preventDefault();
    this.setState({error:""}); //Clean error

    const character = e.target["formInput"].value.trim().toLowerCase();  //Getting string from input
    const pubAPIkey = process.env.REACT_APP_PUB_APIKEY;                  //My public apikey from Marvel API
    const url = process.env.REACT_APP_API + `?limit=12&nameStartsWith=${character}&apikey=${pubAPIkey}`;   //URL to request info
    let that = this;    //Need this to set state inside axios promises
    axios.get(url)
    .then(function (response) {
      // handle success
      that.setState({characters: response.data.data.results});
    })
    .catch(function (error) {
      // handle error
      that.setState({error:"There was an error!"});
    })
  }

  render() {
    //Map JSON array to Character array
    let characters = this.state.characters.map((item, index) =>{
      return (<Col md={4} key={index}>
                <Character character={item}/>
              </Col>)
    });

    return (
      <Container className="App" fluid>
        <Row className="my-5">
          <Col md={3}></Col>
          <Col>
            <MyInput getCharacters={this.getCharacters}/>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="justify-content-center"><p>{this.state.error}</p></Row>
        <Row md={3} sm={1}>
          {characters}
        </Row>
      </Container>
    );
  }
}

export default App;
