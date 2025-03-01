import './App.css';
import AiChatComp from './GeminiText';
import axios from 'axios';
import Navigation from './Navbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Goal, goals } from './goal.js';
import FlowerFinal  from "./images/Flower11.png";

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation></Navigation>
        <Container>
          <Row>
            <Col>
              <div class="task-container">
                  <h2 class="header-font">Quest List</h2>
                  <Goal></Goal>
              </div>
            </Col>
            <Col>
              <img class="pixel-art" height="500px" width="500px" src={FlowerFinal}></img>
            </Col>
            <Col>
              <div class="task-container">
                  <h2 class="header-font">Gemini</h2>
                  <AiChatComp /> 
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
