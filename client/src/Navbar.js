import './App.css';
import {Navbar,Nav,NavDropdown,Form} from 'react-bootstrap';
import logo from "./images/Flower11.png";

function Navigation(){
    return (
        <Navbar expand="lg" className="App-nav">
        <Navbar.Brand href="#home" class="page-logo"><img  height="50px" width="50px" src={logo} class="pixel-art"></img>Quest Log</Navbar.Brand>
        <div class="collapse navbar-collapse" id="navbarNav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" ><Form.Label>Text Size:</Form.Label>
              <Form.Range /></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

    {/* <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="dropdown-menu" aria-labelledby="navbarDropdown">Settings</a>
        <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
      </li>
    </ul> */}
  </div>
    </Navbar>
    
    );
    
}

export default Navigation;