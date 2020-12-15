import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'

import authService from './../../../service/auth.service'



class Navigation extends Component  {

    constructor() {
        super()
            this.AuthService = new authService()
    }

    logOut = () => {
        this.AuthService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }
    
    render() {

        return (
            <>
            <Navbar bg='dark' variant='dark' expand='lg' style={{marginBottom: '40px'}}>
                <Link to='/'>
                    <Navbar.Brand href='/'><img alt='butfirst.wine_ logo' src={logo} width='30' height='30' className='d-inline-block align-top' />butfirst.wine_</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                        <Link to='/'>
                            <Nav.Link as='div'>Home</Nav.Link>
                        </Link>
                        <Link to='/wines'>
                            <Nav.Link as='div'>Wines</Nav.Link>
                        </Link>
                        <Link to='/'>
                            <Nav.Link as='div'>Articles</Nav.Link>
                        </Link>
                        {
                            this.props.loggedUser
                                ?
                                <>
                                    <Link to='/profile'>
                                        <Nav.Link as='div'>Profile</Nav.Link>
                                    </Link>
                                    <Nav.Link as='div' onClick={this.logOut}>Log out</Nav.Link>
                                </>
                                :
                                <>
                                    <Link to='/login'>
                                        <Nav.Link as='div'>Log in</Nav.Link>
                                    </Link>
                                    <Link to='/signup'>
                                        <Nav.Link as='div'>Signup</Nav.Link>
                                    </Link>                                   
                                </>                               
                        }
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </>
        )
    }

    }


export default Navigation