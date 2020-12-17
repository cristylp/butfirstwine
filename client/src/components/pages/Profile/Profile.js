import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

import authService from './../../../service/auth.service'
import UserForm from './../User-form/User-form'
import UserReviews from './../User-Review/User-review'
import Favorites from './../Favorites/Favorites'
import './Profile.css'

class Profile extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,                  
            showEditModal: false,
        }
        this.AuthService = new authService ()
        console.log(this.state)            
    }

    handleEditModal = visible => this.setState({ showEditModal: visible })


    render() {

        return (
             <>
                <Container className='profile'>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }}>
                            <h1 className='title'>Welcome back {this.state.user.username}!</h1> 
                            <hr />
                            <div className='all-btns'>
                                <Button className='btn-edit' size='sm' onClick={() => this.handleEditModal(true)}>Edit my profile</Button>
                            </div>
                            <hr />
                            <h5 className='ratings-text'>Latest ratings</h5>
                            {this.state.user.reviews.map(elm => elm.wine && <UserReviews key={elm._id} {...elm} />)} 
                            <hr />
                            <h5 className='favorites-text'>My favorite wines</h5>
                            {this.state.user.favorites.map(elm => <Favorites key={elm._id} {...elm} />)} 
                        </Col>
                    </Row>
                    <>
                        <Row>
                            <hr />
                        </Row>
                    </>
                </Container>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                    <Modal.Body>
                        <UserForm loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default Profile