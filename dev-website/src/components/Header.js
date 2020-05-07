import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../assets/Header.css'



class Header extends Component{
    render(){
        return (
            <div className="Header">

                {/* NAVBAR */}
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Row fluid style={{ marginLeft: 0, marginRight: 0 }}>
                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Navbar bg='dark'className='justify-content-center dark'>
                            <Nav className='justify-content-center dark'>
                                <Nav.Link href="#home"  className='text-white'>Home</Nav.Link>
                                <Nav.Link href="#"  className='text-white'>Resume</Nav.Link>
                                <NavDropdown title={<span className='text-white'>Other Great Stuff</span>}>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider bg='light'/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="https://github.com/JohnGarrisonDev"  className='text-white'>GitHub</Nav.Link>
                                <Nav.Link href="#home"  className='text-white'>Contact Me</Nav.Link>
                            </Nav>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
          );
          
        }
}

export default Header;