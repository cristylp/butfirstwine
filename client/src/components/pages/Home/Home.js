import React from 'react'
import './Home.css'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap' 


const Home = () => {
    return (

        <>
        <Jumbotron fluid>
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
        </Jumbotron>
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
        </>
        
    )
}


export default Home