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
      </body>
    </div>
  );
}

export default App;
