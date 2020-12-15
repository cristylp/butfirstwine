import React, { Component } from 'react'
import wineService from './../../../service/wines.service'
import './Edit-wine-form.css'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'


class EditWineForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            varietal: '',
            country: '',
            price: '',
            winery: '',
            description: '',
            // wine: this.state.wine
        }
        // console.log(this.props)

        this.WineService = new wineService()
        // console.log(this.WineService)
    }


    
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    
    handleSubmit = e => {
        e.preventDefault()
        
        this.WineService
        .editWine(this.state, this.props.wine._id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    componentDidMount = () => {
        this.WineService
            .getWine(this.props.wineId)
            .then(res => this.setState({ name: res.data.name }))    // rellenar con el state.
            .catch(err => console.log(err))
    }

    handleEditModal = visible => this.setState({ showEditModal: visible })



    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 4 }}>
                        {/* <h1 className='form-title'>Edit {this.state.wine.name}</h1> */}
                        <h1 className='form-title'>Edit wine</h1>
                        <hr />

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control size="sm" type='text' name='name' value={this.state.name} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId='varietal'>
                                    <Form.Label>Varietal</Form.Label>
                                    <Form.Control size="sm" type='text' name='varietal' value={this.state.varietal} onChange={this.handleInputChange} placeholder="*****" />
                                </Form.Group>
                                <Form.Group controlId='country'>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control size="sm" type='text' name='country' value={this.state.country} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId='price'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control size="sm" type='number' name='price' value={this.state.price} onChange={this.handleInputChange} placeholder="*****" />
                                </Form.Group>
                                <Form.Group controlId='winery'>
                                    <Form.Label>Winery</Form.Label>
                                    <Form.Control size="sm" type='text' name='winery' value={this.state.winery} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control size="sm" type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder="*****" />
                                </Form.Group>
                                <Button className='form-btn' variant='dark' type='submit'>Save</Button>
                            </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}




export default EditWineForm