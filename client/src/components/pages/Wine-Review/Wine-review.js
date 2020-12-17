import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './Wine-review.css'




const WineReviews = ({ rating, description, user, wine }) => {

    return (

        <>
            <Col xs={6} md={4}>
                <Card className='review-card' style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>{ user.username }</Card.Title>
                        <hr />
                        <Card.Subtitle className="mb-2 text-muted">Rating: { rating }/5</Card.Subtitle>
                        <Card.Text className='description-text'>"{ description }"</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
        
)

}

export default WineReviews