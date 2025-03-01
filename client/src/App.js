import './App.css';
import axios from 'axios';
import Navigation from './Navbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}
// import { Goal } from './goal.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button onClick={apiCall}>Make API Call</Button>
      </header>
      <body>
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
      </body>
    </div>
  );
}

export default App;
