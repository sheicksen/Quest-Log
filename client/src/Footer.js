import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import { CompletedGarden } from './completedGarden';

function Footer(){
    return(
        <div style={{width:"100%", textalign:"center"}} class="footer">
            <Container>
                <Row style={{padding:"10px"}}>
                <Col>
                    HenHacks 2025
                </Col>
            
                <Col>
                    <p style={{fontSize:"15px", width:"45vw"}}>Contributers: Sophia Heicksen, Nolan Keefe, Samantha Paez, Jackson Singley</p>
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