import React, { Component } from 'react'
import wineService from './../../../service/wines.service'
import './Wine-form.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class WineForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            winery: '',
            varietal: '',
            country: '',
            region: '',
            price: '',
            description: '',
            imageUrl: '',
            owner: this.props.loggedUser ? this.props.loggedUser._id : ''
        }

        // console.log(this.props)

        this.WineService = new wineService()
        // console.log(this.WineService)
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    
    handleSubmit = e => {
        e.preventDefault()

        this.WineService
            .saveWine(this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 4 }}>
                        <h1 className='form-title'>Add a new wine</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control size="sm" type='text' name='name' value={this.state.name} onChange={this.handleInputChange} placeholder="Wine name" />
                            </Form.Group>
                            <Form.Group controlId='winery'>
                                <Form.Label>Winery</Form.Label>
                                <Form.Control size="sm" type='text' name='winery' value={this.state.winery} onChange={this.handleInputChange} placeholder="Winery name" />
                            </Form.Group>
                            <Form.Group controlId='varietal'>
                                <Form.Label>Varietal type</Form.Label>
                                <Form.Control size="sm" as="select" name='varietal' value={this.state.varietal} onChange={this.handleInputChange}>
                                    <option>Choose an option</option>
                                    <option>Red</option>
                                    <option>White</option>
                                    <option>Rose</option>
                                    <option>Sparkling</option>
                                    <option>Sweet</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='country'>
                                <Form.Label>Country</Form.Label>
                                <Form.Control size="sm" type='text' name='country' value={this.state.country} onChange={this.handleInputChange} placeholder="From which country is the wine?" />
                            </Form.Group>
                            <Form.Group controlId='region'>
                                <Form.Label>Region</Form.Label>
                                <Form.Control size="sm" type='text' name='region' value={this.state.region} onChange={this.handleInputChange} placeholder="From which region is the wine?" />
                            </Form.Group>
                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control size="sm" type='number' name='price' value={this.state.price} onChange={this.handleInputChange} placeholder="$" />
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control size="sm" type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder="Add a description" />
                            </Form.Group>
                            <Form.Group controlId='imageUrl'>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Image" name='imageUrl' value={this.state.imageUrl} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Group >
                            <div className='buttons'>
                            <Button className='form-btn' variant='dark' type='submit'>Save</Button>
                                <Link className='fake-btn' to='/wines' style={{marginLeft: '20px' }}>Back to wines</Link>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>
        )
    }
}



export default WineForm