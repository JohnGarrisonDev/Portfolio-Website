import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import github from '../../assets/Github.png';
import LinkedIn from '../../assets/LinkedIn.png';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import '../../styles/Header.css'



const navStyles={
    color:'white'
}


class Header extends Component{
    render(){
        return (
                            <div className="Header">
                {/* NAVBAR */}
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Row fluid style={{ marginLeft: 0, marginRight: 0 }}>
                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Navbar className='justify-content-center dark homeNav' >
                            <NavbarBrand style={{color:'white', position:'absolute', left:0,padding:'3%'}}>Development Portfolio</NavbarBrand>
                            <Nav className='justify-content-center dark'>
                                <Nav.Link href="/" style={navStyles}>Home</Nav.Link>
                                <Nav.Link href="/resume" style={navStyles}>Resume</Nav.Link>
                                <Nav.Link href='/aboutme' style={navStyles}>About Me</Nav.Link>
                                <Nav.Link href='/' style={navStyles}>Hosted Projects</Nav.Link>
                            </Nav>
                            <Nav style={{position: 'absolute', right: 0,color:'white'}}>
                            <Nav.Link  href="https://github.com/JohnGarrisonDev" ><img src={github} alt='GitHub'></img></Nav.Link>
                            <Nav.Link  href="https://www.linkedin.com/in/john-garrison-63b507159/" ><img src={LinkedIn} style={{width:'34px',height:'32px'}} alt='GitHub'></img></Nav.Link>
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