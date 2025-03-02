import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import { CompletedGarden } from './completedGarden';

function Footer(){
    return(
        <div style={{width:"100%", textalign:"center"}} class="footer">
            <Container>
                <Row>
                <Col>
                    HenHacks 2025
                </Col>
            
                <Col>
                    Contributers: Sophia Heicksen, Nolan Keefe, Samantha Paez, Jackson Singley
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