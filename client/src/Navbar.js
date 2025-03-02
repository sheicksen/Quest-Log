import './App.css';
import {Navbar} from 'react-bootstrap';
import logo from "./images/Flower11.png";

function Navigation(){
    return (
        <Navbar expand="lg" className="App-nav">
        <Navbar.Brand href="#home"><img  height="30px" width="30px" src={logo} class="pixel-art"></img>Quest Log</Navbar.Brand>
    </Navbar>
    );
}

export default Navigation;