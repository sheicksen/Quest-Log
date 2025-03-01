import './App.css';
import {Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(){
    return (
        <div>
            <Navbar>
                <Container>
                    <Nav>
                    <Nav.Link>This is a link</Nav.Link>
                    <Nav.Link>This is another link</Nav.Link>
                    <Nav.Link>This is a third link</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;