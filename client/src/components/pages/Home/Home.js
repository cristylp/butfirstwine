import React from 'react'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap' 


const Home = () => {
    return (
        <Container className='home-page'>
            <Row>
                <Col md={7} sm={5} >
                    <h1 className='home-text'>Just you average wine drinkers, teaching you "wine 101"</h1>
                    <hr /> 
                </Col>
                <Col md={4} sm={2}>
                    <p>PRUEBA</p>
                </Col>
            </Row>

       
        </Container>
        
    )
}


export default Home

