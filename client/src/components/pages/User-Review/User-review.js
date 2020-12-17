import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './User-review.css'




const UserReviews = ({ rating, description, user, wine }) => {

    return (
        
        <>
            <Col md={{ span: 8, offset: 2 }}>
                <Card className='review-card' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{ wine.name }</Card.Title>
                        <hr />
                        <Card.Subtitle className="mb-2 text-muted">Rating: { rating }/5</Card.Subtitle>
                        <Card.Text className='description-text'>"{ description }"</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
        
)

}

export default UserReviews