import './App.css';
import HelloWorld from './GeminiText';
import axios from 'axios';
import Navigation from './Navbar';
import { Button } from 'react-bootstrap';

// Gets data sent by the home route from the server.
const apiCall = () => {
  axios.get('http://localhost:8080/').then((data) => {
    console.log(data.data);
  });
}

function App() {
  return (
    
    <div className="App">
      <HelloWorld /> 
      <header className="App-header">
      <Navigation></Navigation>
        <Button onClick={apiCall}>Make API Call</Button>
      </header>
    </div>
  );
}

export default App;
