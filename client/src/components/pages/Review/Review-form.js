import React, { Component } from 'react'
import reviewService from './../../../service/review.service'
import './Review-form.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'



class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: '', 
            description: '',
            user: this.props.loggedUser._id,
            wine: this.props.wineId
        }
        this.ReviewService = new reviewService()

    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.ReviewService
            .saveReview(this.state)
            .then(res => this.props.storeUser(res.data[0]))
            .catch(err => console.log(err))
    }

    handleReviewModal = visible => this.setState({ showReviewModal: visible })


    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 4 }}>
                        <h1 className='form-title'>Write a review</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control size="sm" type='number' name='rating' value={this.state.rating} onChange={this.handleInputChange} placeholder="*Rate from 1-5" />
                            </Form.Group>
                            <Form.Group controlId='description.ControlTextarea1'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as='textarea' rows={3} size="sm" type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder="Add a description" />
                            </Form.Group>
                            <div className='buttons'>
                                <Button className='form-btn' variant='dark' type='submit'>Save</Button>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>
        )
    }
}




export default ReviewForm