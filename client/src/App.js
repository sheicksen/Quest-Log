import './App.css';
import {useState} from 'react';
import AiChatComp from './GeminiText';
import axios from 'axios';
import Navigation from './Navbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Goal, goals } from './goal.js';
import FlowerFinal  from "./images/Flower11.png";
import { Flower } from './Flower.js';

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}


function App() {
  const [streakDisplay, setStreakDisplay] = useState(0);
  const passStreak = (streakVal) => {
    setStreakDisplay(streakVal);
  };
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
                  <Goal onUpdate={passStreak}></Goal>
              </div>
            </Col>
            <Col>
              <Flower streakVal={streakDisplay}></Flower>
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
