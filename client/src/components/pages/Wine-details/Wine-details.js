import React, { Component } from 'react'
import wineService from './../../../service/wines.service'
import Loader from './../../shared/Loader'
import './Wine-details.css'

import { Container, Row, Col, Button, ButtonGroup, Modal } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

import EditWineForm from './../Edit-Wine-Form/Edit-Wine-Form'
import WineReviews from './../Wine-Review/Wine-review'



class WineDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wine: undefined,
            owner: this.props.loggedUser ? this.props.loggedUser._id : '',
            showEditModal: false
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


    deleteWine = () => {

        const wine_id = this.props.match.params.wine_id

        this.WineService
            .deleteWine(wine_id)
            .then(res => {
                console.log(res)
                this.props.history.push('/wines') 
             })
            .catch(err => console.log(err))
    }


    handleEditModal = visible => this.setState({ showEditModal: visible })


    updateWine = wineInfo => this.setState({ wine: wineInfo })
    



    render() {

        return (
            
            <Container className='wine-details'>
                {this.state.wine
                    ?
                    <>
                        <Row>
                            <Col md={6} sm={5} > 
                                <div className='details-header'>
                                    <h1 className='title'>{this.state.wine.name}</h1>
                                    <h5>{this.state.wine.varietal} wine from {this.state.wine.country}</h5>
                                    <hr />
                                </div>
                                <p>Average price: ${this.state.wine.price}</p>
                                <p>Winery: {this.state.wine.winery}</p>
                                <hr />
                                <p>Taste notes: {this.state.wine.description}</p>
                                <hr />
                                <h5 className='details-header ratings'>User ratings</h5>
                                {this.state.wine.reviews.map(elm => <WineReviews key={elm._id} {...elm} />)} 
                                <hr />
                                <ButtonGroup aria-label='Basic example' className='edit-btn'>
                                    <Link className='btn btn-back btn-sm' to='/wines'>Back to wines</Link>
                                    <Button className='btn btn-fav btn-sm'>Add to favorites</Button>
                                    {this.state.wine.owner === this.props.loggedUser._id && <Button className='btn btn-edit btn-sm' onClick={() => this.handleEditModal(true)}>Edit wine</Button>}
                                    {this.state.wine.owner === this.props.loggedUser._id && <Button className='btn btn-delete btn-sm'  onClick={this.deleteWine}>Delete wine</Button>}
                                </ButtonGroup>
                            </Col>
                            <Col md={2} sm={4}></Col>
                            <Col md={4} sm={3}>
                                <img className='wine-img' src={this.state.wine.imageUrl} alt={this.state.wine.name} />
                            </Col>
                        </Row>
                        <div>
                            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                                <Modal.Body>
                                    <EditWineForm updateWine={this.updateWine} loggedUser={this.props.loggedUser} wineId={this.state.wine._id} />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </>
                    :
                    <Loader />
                }
            </Container>
        )
    }
}


export default WineDetails