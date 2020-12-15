import axios from 'axios'


class wineService {
    
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/wine',
            withCredentials: true
        })
    }

    
    //ENDPOINTS DE LOS VINOS
    getWines = () => this.apiHandler.get('/getAllWines')
    getWine = wineId => this.apiHandler.get(`/getOneWine/${wineId}`)
    saveWine = wineInfo => this.apiHandler.post('/newWine', wineInfo)
    editWine = wineId => this.apiHandler.put(`/editWine/${wineId}`)             
    deleteWine = wineId => this.apiHandler.delete(`/deleteWine/${wineId}`)        
    filterWine = varietal => this.apiHandler.get(`/filter/${varietal}`)
}



export default wineService