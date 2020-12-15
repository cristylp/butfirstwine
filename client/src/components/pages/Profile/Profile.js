import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

import authService from './../../../service/auth.service'
import UserForm from './../User-form/User-form'
import ReviewForm from './../Review/Review-form'
import './Profile.css'

class Profile extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,                  
            showEditModal: false,
            showReviewModal: false
        }
        this.AuthService = new authService ()
        console.log(this.state)            
    }

    handleEditModal = visible => this.setState({ showEditModal: visible })

    handleReviewModal = visible => this.setState({ showReviewModal: visible })



    render() {

        return (
             <>
                <Container className='profile'>
                    <h1 className='title'>Welcome back {this.state.user.username} !</h1> 
                    <Row>
                        <Col md={8} sm={6} >
                            <hr />
                            <div className='all-btns'>
                                <Button variant='dark' size='sm' onClick={() => this.handleEditModal(true)}>Edit my profile</Button>
                                <Button variant='dark' size='sm'>My wishlist</Button>                         {/*  AQUI LLEGAN LOS FAVORITES DEL USER  */}
                                <Button variant='dark' size='sm'>My reviews</Button>                          {/*  AQUI LLEGAN LOS REVIEWS HECHOS POR EL USER  */}
                                {/* <Button variant='dark' size='sm'>Plan a cata!</Button>                     QUEDA COMO ESCALABILIDAD..  */}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                    <Modal.Body>
                        <UserForm loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showReviewModal} onHide={() => this.handleReviewModal(false)}>
                    <Modal.Body>
                        <ReviewForm loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default Profile