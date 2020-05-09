import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

{{/*Styles*/}}

const navStyles={
    color:'white'
}


{{/*Render*/}}
class Header extends Component{
    render(){
        return (
            <div className="Header">
                {/* NAVBAR */}
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Row fluid style={{ marginLeft: 0, marginRight: 0 }}>
                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Navbar bg='dark'className='justify-content-center dark' >
                            <Nav className='justify-content-center dark'>
                                <Nav.Link href="/" style={navStyles}>Home</Nav.Link>
                                <Nav.Link href="/" style={navStyles}>Resume</Nav.Link>
                                <Nav.Link href='/' style={navStyles}>About Me</Nav.Link>
                                <Nav.Link href="https://github.com/JohnGarrisonDev"  className='text-white'>GitHub</Nav.Link>
                                <Nav.Link href='/' style={{color:'white',textAlign:'right'}}>Contact Me</Nav.Link>
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