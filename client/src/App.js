import './App.css';
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
      <header className="App-header">
      </header>
      <Navigation></Navigation>
        <Container>
          <Row>
            <Col>
              <div class="task-container">
                  <h2 class="header-font">Quest List</h2>
              </div>
            </Col>
            <Col>
            </Col>
            <Col>
              <div class="task-container">
                  <h2 class="header-font">Gemini</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <Goal></Goal>
    </div>
  );
}

export default App;
