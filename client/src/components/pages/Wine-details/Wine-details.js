import React, { Component } from 'react'
import wineService from './../../../service/wines.service'
import Loader from './../../shared/Loader'
import './Wine-details.css'

import { Container, Row, Col, Button, ButtonGroup, Modal } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

import EditWineForm from './../Edit-Wine-Form/Edit-Wine-Form'

// import Message from './../../shared/Message/Message'


class WineDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wine: undefined,
            owner: this.props.loggedUser ? this.props.loggedUser._id : '',
            showEditModal: false
            // showToast: false,
            // toastText: ''
        }
        this.WineService = new wineService()
        
    }

    componentDidMount = () => {

        const wine_id = this.props.match.params.wine_id

        this.WineService
            .getWine(wine_id)
            .then(res => this.setState({ wine: res.data }))
            .catch(err => console.log(err))
    }


    handleEditModal = visible => this.setState({ showEditModal: visible })



    render() {

        // console.log(this.props)
        return (
            <Container className='wine-details'>
                {this.state.wine
                    ?
                    <>
                        <h1 className='title'>{this.state.wine.name}</h1>
                        <hr />
                        <Row>
                            <Col md={8} sm={6} >
                                <h4>{this.state.wine.varietal} wine from {this.state.wine.country}</h4>
                                <hr />
                                <p>Average price: ${this.state.wine.price}</p>
                                <p>Winery: {this.state.wine.winery}</p>
                                <hr />
                                <p>Taste notes: {this.state.wine.description}</p>
                                <ButtonGroup aria-label='Basic example' className='edit-btn'>
                                    <Button className='btn btn-dark btn-sm'>Add to favorites</Button>
                                    <Link className='btn btn-dark btn-sm' to='/wines'>Back to wines</Link>
                                    {this.state.wine.owner === this.props.loggedUser._id && <Button className='btn btn-dark btn-sm' onClick={() => this.handleEditModal(true)}>Edit wine</Button>}
                                </ButtonGroup>
                            </Col>
                            <Col md={4} sm={2}>
                                <img src={this.state.wine.imageUrl} alt={this.state.wine.name} />
                            </Col>
                        </Row>
                        <div>
                            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                                <Modal.Body>
                                    <EditWineForm loggedUser={this.props.loggedUser} wineId={this.state.wine._id} />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </>
                    :
                    <Loader />
                }
                <hr />
            </Container>
        )
    }
}


export default WineDetails