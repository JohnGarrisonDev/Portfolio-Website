import React, {Component} from 'react';
import '../../styles/Home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

  

const homeSectionStyle = {
    textAlign:'center'

}

class HomeSection extends Component{
    render(){
        return (
            <div>
                <Container fluid>
                    <Row className='CenterSection' style={{textAlign:'center',color:'white', padding:'10%'}}>
                        <Col>
                            <h1>Hi, My Name is John and im a full stack web developer</h1>
                            <Button variant='outline-light'>
                                Check out my projects
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
          );
          
        }
}

export default HomeSection;
