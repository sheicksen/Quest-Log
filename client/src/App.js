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
/* checkStreaks 
*  Compares the last submit date of each goal
to th current date. Sets the streak to -1 (broken) if the difference
is greater than 1.

*/
function checkStreaks(){
  const today=new Date();
  for(let i = 0; i < goals.length; i++){
    let stringDate = goals[i].lastSubmit.substring(0, 10);
    let day = stringDate.substring(8,10);
    let month = stringDate.substring(5,7);
    let year = stringDate.substring(0,4);
    console.log("Last submit was ", day+"/"+month+"/"+year);
    let submitDate= new Date(month+"/"+day+"/"+year);
    let timeDiff = today.getTime() - submitDate.getTime();
    let daysDiff = Math.round(timeDiff / (1000*3600*24));

    if (daysDiff > 1){
      goals[i].streak = -1;
      console.log("Streak Broken");
    }
  }
}
function App() {
  const [streakDisplay, setStreakDisplay] = useState(0);
  const [currentGoal, setCurrentGoal] = useState({name: "No task selected", description: "Select a task to view your plant's progression.", streak:0});
  
  checkStreaks();
  
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
                  <Goal class = "body-font" onFocus={passGoal} onStreakUpdate={passStreak}></Goal>
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
