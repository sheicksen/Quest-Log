import './App.css';
import axios from 'axios';
import Navigation from './Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}
import { Goal } from './goal.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation></Navigation>
        <Button onClick={apiCall}>Make API Call</Button>
      </header>
    </div>
  );
}

export default App;
