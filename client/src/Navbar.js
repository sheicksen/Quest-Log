import './App.css';
import {Navbar,Nav,NavDropdown,Form} from 'react-bootstrap';
import logo from "./images/Flower11.png";
import {React,useState} from 'react';


function Navigation(){
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
        document.documentElement.style.setProperty('--slider-value',`${e.target.value}px`)
    };
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
              <Form.Range id = "customRange" value = '--sliderValue' onChange = {handleSliderChange} className="custom-slider"/></NavDropdown.Item>
              <p>Selected Value: {sliderValue}</p>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

  </div>
    </Navbar>
    
    );
    
}

export default Navigation;