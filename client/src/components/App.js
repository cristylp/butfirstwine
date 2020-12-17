import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './layout/Navigation/Navigation'
import Home from './pages/Home/Home'
import WinesList from './pages/Wines-list/Wines-list'
import WineDetails from './pages/Wine-details/Wine-details'
import WineForm from './pages/Wine-form/Wine-form'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import UserForm from './pages/User-form/User-form'
import Footer from './layout/Footer/Footer'
import ReviewForm from './pages/Review/Review-form'
import EditWineForm from './pages/Edit-Wine-Form/Edit-Wine-Form'

import authService from './../service/auth.service'



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.AuthService = new authService()
  }

  componentDidMount = () => {

    if (this.state.loggedInUser === undefined) {
        this.AuthService
          .isLoggedIn()
          .then(response => this.setState({ loggedInUser: response.data }))
          .catch(err => console.log(err))
      }
    }
  

  setTheUser = user => this.setState({ loggedInUser: user })

render() {
  

    return (
      <>
        <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
  
        <main>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/wines' exact render={() => <WinesList storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />} />  
            <Route path='/wines/edit-wine' exact render={props => <EditWineForm {...props} />} />
            <Route path='/wines/create' render={props => <WineForm loggedUser={this.state.loggedInUser} {...props} />} /> 
            <Route path='/wines/:wine_id' exact render={props => <WineDetails loggedUser={this.state.loggedInUser} {...props} />} /> 
            <Route path='/signup' render={props => <Signup storeUser={this.setTheUser} {...props} />} /> 
            <Route path='/login' render={props => <Login storeUser={this.setTheUser} {...props} />} /> 
            <Route path='/profile' render={props => this.state.loggedInUser ? <Profile storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to='/login' />} /> 
            <Route path='/edit-user' render={props => <UserForm {...props} />} />
            <Route path='/review/rate' render={props => <ReviewForm loggedUser={this.state.loggedInUser} {...props} />} /> 

  
          </Switch>
        </main>

        <Footer />
  
      </>
     
    )
  }
}

export default App