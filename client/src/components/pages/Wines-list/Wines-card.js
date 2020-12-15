import React, { Component } from 'react'
import { Col, Card, ButtonGroup, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ReviewForm from './../Review/Review-form'


class WinesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wines: [],
            owner: this.props.loggedUser ? this.props.loggedUser._id : '',
            // showEditModal: false,
            showReviewModal: false
        }    
    }
    

    // handleEditModal = visible => this.setState({ showEditModal: visible })

    handleReviewModal = visible => this.setState({ showReviewModal: visible })
    

    render() {

        return (
            <>
            <Col xs={6} md={4}>
                <Card className='wine-card'>
                    <Card.Img variant='top' src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <ButtonGroup aria-label='Basic example' className='edit-btn'>
                            <Link className='btn btn-dark btn-sm' to={`/wines/${this.props._id}`}>See details</Link>
                            {this.props.loggedUser && <Button className='btn btn-dark btn-sm' onClick={() => this.handleReviewModal(true)}>Rate wine</Button>}
                            {/* {this.props.owner === this.props.loggedUser._id && <Button className='btn btn-dark btn-sm' onClick={() => this.handleEditModal(true)}>Edit wine</Button>} */}
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
            <div>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showReviewModal} onHide={() => this.handleReviewModal(false)}>
                    <Modal.Body>
                            <ReviewForm storeUser={this.props.storeUser} loggedUser={this.props.loggedUser} wineId={this.props._id} />
                    </Modal.Body>
                </Modal>
            </div>
            </>
        )
    }
}




export default WinesCard