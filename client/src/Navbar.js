import './App.css';
import {Navbar} from 'react-bootstrap';
import logo from "./images/Flower11.png";

function Navigation(){
    return (
        <Navbar expand="lg" className="App-nav">
        <Navbar.Brand href="#home" class="page-logo"><img  height="50px" width="50px" src={logo} class="pixel-art"></img>Quest Log</Navbar.Brand>
        <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
    </Navbar>
    
    );
    
}

export default Navigation;