import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/logo.png"


export default function Header() {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="" srcset="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto gap-4">
                        <Nav.Link href="#home" className="oswald fs-6">Home</Nav.Link>
                        <Nav.Link href="#link" className="oswald fs-6">About</Nav.Link>
                        <Nav.Link href="#link" className="oswald fs-6">Service</Nav.Link>
                        <Nav.Link href="#link" className="oswald fs-6">Price</Nav.Link>
                        <Nav.Link href="#link" className="oswald fs-6">Testimonial</Nav.Link>
                    </Nav>
                    <button className="btn btn-outline-danger rounded-0">Contact</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}