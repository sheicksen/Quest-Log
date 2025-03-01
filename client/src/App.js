import './App.css';
import AiChatComp from './GeminiText';
import axios from 'axios';
import Navigation from './Navbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Goal } from './goal.js';

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}


function App() {
  return (
    
    <div className="App">
      <AiChatComp /> 
      <header className="App-header">

        <Button onClick={apiCall}>Make API Call</Button>
      </header>
      <Navigation></Navigation>
        <Container>
          <Row>
            <Col>
            Hello
            </Col>
            <Col>
            There
            </Col>
            <Col>
            World
            </Col>
          </Row>
        </Container>
        <Goal></Goal>
    </div>
  );
}

export default App;
