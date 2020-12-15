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
        this.WineService
            .filterWine(e.target.value)
            .then(res => this.setState({ wines: res.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        console.log(this.props)

        this.WineService
            .getWines()
            .then(res => this.setState({ wines: res.data }))
            .catch(err => console.log(err))
    }




    render() {

        const filteredWines = this.state.wines.filter(wine => {
            return wine.varietal.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase)
        })

        return (
            <Container>
                {this.state.wines
                    ?
                    <>
                        <h1 className='title'>Wines from around the world</h1>
                        <p className='info'>Stuck between "I need to save money" and "let's buy a vineyard in Italy!"</p>
                        <hr />
                        <Form>
                            <Row>
                                <Col md='3'>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" onChange={this.wineFilterOnChange}>
                                            <option>Filter by color</option>
                                            <option>Red</option>
                                            <option>White</option>
                                            <option>Rose</option>
                                            <option>Sweet</option>
                                            <option>Sparkling</option>
                                            {/* <option>View All</option>      */}       {/* COMO HACER PARA QUE SE MUESTREN NUEVAMENTE TODOS LOS VINOS      */}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>

                        {this.props.loggedUser && <Link className='new-wine-btn btn btn-dark btn-sm' to='/wines/create'>Add a new wine</Link>}
                        <Row>
                            {this.state.wines.map(elm => <WinesCard key={elm._id} {...elm} storeUser={this.props.storeUser} loggedUser={this.props.loggedUser} />)}
                        </Row>
                    </>
                    :
                    <Loader />
                }
            </Container>
        )
    }
}


export default WinesList