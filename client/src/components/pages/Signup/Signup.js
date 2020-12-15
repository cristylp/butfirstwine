import React, { Component } from 'react'
import authService from './../../../service/auth.service'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'

import Alert from './../../shared/Alert/Alert'



class Signup extends Component {
    constructor() {
        super()
        this.state = {
            formInfo: {
                username: '',
                password: ''
            },
            showToast: false,
            toastText: ''
        }
        this.AuthService = new authService()
    }

    handleInputChange = e => this.setState({ formInfo: { ...this.state.formInfo, [e.target.name]: e.target.value } })
    
    handleSubmit = e => {
        e.preventDefault()

        this.AuthService
            .signup(this.state.formInfo)
            .then(theLoggedInUser => {                               // Errores de usuario se ven en Network
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/wines')                    // Forma para redirigir ---> mandarlo a HOME realmente.
            })   
            .catch(err => this.setState({ showToast: true, toastText: err.response.data.message }))
    }

    handleToast = (visible, text) => this.setState({ showToast: visible, toastText: text })


    render() {
        return (

             <>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 4 }}>
                            <h1 className='title'>Sign up</h1>
                            <hr />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId='username'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control size="sm" type='text' name='username' value={this.state.username} onChange={this.handleInputChange} placeholder="Username" />
                                </Form.Group>
                                <Form.Group controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control size="sm" type='password' name='password' value={this.state.password} onChange={this.handleInputChange}placeholder="*****" />
                                </Form.Group>
                                <Button className='form-btn' variant='dark' type='submit'>Sign up</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <Alert show={this.state.showToast} handleToast={this.handleToast} toastText={this.state.toastText} />
            </>
        )
    }
}



export default Signup