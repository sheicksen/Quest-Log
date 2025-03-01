import './App.css';
import {Nav, Navbar} from 'react-bootstrap';

function Navigation(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Quest Log</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Health</Nav.Link>
                <Nav.Link href="#link">Advisor</Nav.Link>
                <Nav.Link href="#link">Health</Nav.Link>
            </Nav>
        </Navbar.Collapse>      
    </Navbar>
    );
}

export default Navigation;