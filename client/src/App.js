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
import { CompletedGarden } from './completedGarden';

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}
function App() {
  const [streakDisplay, setStreakDisplay] = useState(0);
  const [currentGoal, setCurrentGoal] = useState({name: "No task selected", description: "Select a task to view your plant's progression.", streak:0});
  const passStreak = (streak) => {
    setStreakDisplay(streak);
  };
  const passGoal = (goal) =>{
    setStreakDisplay(goal.streak);
    setCurrentGoal(goal);
  }
  return (
    
    <div className="App">
      <Navigation></Navigation>
        <Container class="body-container">
          <Row>
            <Col>
              <div class="task-container col-min-height">
                  <h2 class="header-font">Quest Log</h2>
                  <Goal onFocus={passGoal} onStreakUpdate={passStreak}></Goal>
              </div>
            </Col>
            <Col style={{height:"100vh"}}>
            <div style={{padding:"20px"}}class="col-min-height bg-container bg-gradient">
              <h2 class="header-font">Quest Development</h2>
              <Flower streak={streakDisplay} goal={currentGoal}></Flower>
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
        <CompletedGarden></CompletedGarden>
        <Footer></Footer>
    </div>
  );
}

export default App;
