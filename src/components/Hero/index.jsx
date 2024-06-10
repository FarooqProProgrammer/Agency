import { Col, Container, Row } from "react-bootstrap";
import AboutImage from "../../assets/images/about.png"


export default function Hero() {
    return ( 
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="h-100 pt-7">
                        <h5 className="oswald display-4 fw-medium">Great Software is built with <span>amazing developers</span></h5>
                    </div>
                </Col>
                <Col lg={6}>
                    <img src={AboutImage} className="w-100 h-500 object-fit-contain" alt="" srcset="" />
                </Col>
            </Row>
        </Container>
    )
}