import React, { Component } from 'react'
import authService from './../../../service/auth.service'
import './User-form.css'

import { Form, Button, } from 'react-bootstrap'


class UserForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            profileImg: '',
        }

        this.AuthService = new authService()
        // console.log(this.AuthService)
    }


    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.AuthService
            .editUser(this.state, this.props.loggedUser._id)
            // .then(res => this.setState({ username: res.data.username, password: res.data.password, profileImg: res.data.profileImg }))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    handleEditModal = visible => this.setState({ showEditModal: visible })



    render() {
        return (
            <>
                <div>
                    <h1 className='form-title'>Edit my profile</h1>
                    <hr />
                </div>
            
                <Form onSubmit={this.handleSubmit}>    
  
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control size="sm" type='text' name='username' value={this.state.username} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="sm" type='password' name='password' value={this.state.password} onChange={this.handleInputChange} placeholder="*****" />
                    </Form.Group>
                    <Form.Group controlId='profileImg'>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Image" name='profileImg' value={this.state.profileImg} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Group >
                        <Button className='form-btn' variant='dark' type='submit'>Save</Button> 
                </Form>
            </>
        )
    }

}




export default UserForm