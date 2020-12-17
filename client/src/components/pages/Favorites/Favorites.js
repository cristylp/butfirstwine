import React, { Component } from 'react'
import authService from './../../../service/auth.service'


class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser._id,
            wine: this.props.wineId
        }
        this.AuthService = new authService()


    }


    Favorites = () => {
    
        const wine_id = this.props.match.params.wine_id
    
        this.WineService
            .favorites(wine_id)
            .then(res => {console.log(res)
            this.props.history.push('/favorites')
            })
            .catch(err => console.log(err))
    }



    render() {

        return (
            <h1>PRUEBA</h1>
            
        )
    }
}




export default Favorites