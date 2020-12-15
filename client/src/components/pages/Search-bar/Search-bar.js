import React, { Component } from 'react';
import wineService from './../../../service/wines.service'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            wine: wine.data
        }
        this.WineService = new wineService()
    }




    handleInputChange = e => {

        const { name } = e.target
        const value = e.target.value
        this.props.search(value)
        console.log(value)
    }






    render() {


        return (

            <>
                <div>
                    <form >
                        <label>Search</label><br />
                        <input type="text" name="title" onChange={this.handleInputChange} value={this.state.data.name} />
                        <br />
                        <input type="checkbox" /> <label>Only show products on stocks</label>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar