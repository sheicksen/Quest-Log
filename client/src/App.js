import './App.css';
import {useState} from 'react';
import AiChatComp from './GeminiText';
import axios from 'axios';
import Navigation from './Navbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Goal, goals } from './goal.js';
import { Flower } from './Flower.js';
import Footer from './Footer.js';

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}
function App() {
  const [streakDisplay, setStreakDisplay] = useState(0);
  const passStreak = (streak) => {
    setStreakDisplay(streak);
    console.log(streakDisplay);
  };
  return (
    
    <div className="App">
      <Navigation></Navigation>
        <Container class="body-container">
          <Row>
            <Col>
              <div class="task-container col-min-height">
                  <h2 class="header-font">Quest Log</h2>
                  <Goal onFocus={passStreak}></Goal>
              </div>
            </Col>
            <Col style={{height:"100vh"}}>
            <div class="col-min-height bg-container bg-gradient">
              <Flower flowerStage={streakDisplay}></Flower>
            </div>
              
            </Col>
            <Col>
              <div class="task-container col-min-height">
                  <h2 class="header-font">Gemini</h2>
                  <AiChatComp /> 
              </div>
            </Col>
          </Row>
        </Container>
        <Button onClick={passStreak}>Update Streak
        </Button>
        <Footer></Footer>
    </div>
  );
}

export default App;
