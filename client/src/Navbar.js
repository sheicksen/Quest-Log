import './App.css';
import {Nav, Navbar} from 'react-bootstrap';
import logo from "./images/logo192.png";

function Navigation(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home"><img  height="30px" width="30px" src={logo}></img>Quest Log</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
        </Navbar.Collapse>       */}
    </Navbar>
    );
}

export default Navigation;