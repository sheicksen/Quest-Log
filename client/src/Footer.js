import './App.css';
import {Container, Row, Col} from "react-bootstrap";

function Footer(){
    return(
        <div style={{width:"100%", textalign:"center"}} class="footer">
            <Container>
                <Row>
                <Col>
                    HenHacks 2025
                </Col>
            
                <Col>
                    Contributers: Sophia Heicksen, Nolan Keefe, Samantha Paez, Jackson Singely
                </Col>
                <Col>
                    Hack the Past
                </Col>
                </Row>
            </Container>

        </div>
    );

}
export default Footer;