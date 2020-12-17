import axios from 'axios'


class authService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }


    //ENDPOINTS DEL USER
    signup = credentials => this.apiHandler.post('/signup', credentials)    // credentials remplaza (username, password) y luego el objeto de { username, password }
    login = credentials => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
    editUser = (credentials, userId) => this.apiHandler.put(`/editUser/${userId}`, credentials) 
    favorites = (userId, wineId) => this.apiHandler.post(`/addFavorites/${wineId}`, userId) 
    
}


export default authService