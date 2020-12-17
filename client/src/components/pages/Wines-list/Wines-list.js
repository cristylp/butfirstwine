import React, { Component } from 'react'
import wineService from './../../../service/wines.service'
import WinesCard from './Wines-card'
import Loader from './../../shared/Loader'
import './Wines-list.css'

import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class WinesList extends Component {

    constructor() {
        super()
        this.state = {
            wines: [],
            inputValue: '',
            sortValue: ''
        }
        this.WineService = new wineService()
        // console.log(this.WineService)
    }

    wineFilterOnChange = e => {
        if (e.target.value === 'All') this.getAllWines()
        else {
            this.WineService
                .filterWine(e.target.value)
                .then(res => this.setState({ wines: res.data }))
                .catch(err => console.log(err))    
        }
    }

    componentDidMount = () => this.getAllWines()

    getAllWines = () => {

        this.WineService
            .getWines()
            .then(res => this.setState({ wines: res.data }))
            .catch(err => console.log(err))
    }




    render() {

        return (
            <Container>
                {this.state.wines.length
                    ?
                    <>
                        <h1 className='title'>Wines from around the world</h1>
                        <p className='info'>Stuck between "I need to save money" and "let's buy a vineyard in Italy!"</p>
                        <hr />
                        <Form>
                            <Row>
                                <Col md='3'>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Filter by color</Form.Label>
                                        <Form.Control as="select" onChange={this.wineFilterOnChange}>
                                            <option value='All'>View All</option>          
                                            <option value='Red'>Red</option>
                                            <option value='White'>White</option>
                                            <option value='Rose'>Rose</option>
                                            <option value='Sweet'>Sweet</option>
                                            <option value='Sparkling'>Sparkling</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>

                        {this.props.loggedUser && <Link className='add-new btn btn-fav' to='/wines/create'>Add a new wine</Link>}
                        <Row className='winecard-div'>
                            {this.state.wines.map(elm => <WinesCard key={elm._id} {...elm} storeUser={this.props.storeUser} loggedUser={this.props.loggedUser} />)}
                        </Row>
                        <>
                            <Row>
                                <hr />
                            </Row>
                        </>
                    </>
                    :
                    <Loader />
                }
            </Container>
        )
    }
}


export default WinesList