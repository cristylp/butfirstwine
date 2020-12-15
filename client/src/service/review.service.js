import axios from 'axios'

class reviewService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/review',
            withCredentials: true
        })
    }


    //ENDPOINTS DE LOS REVIEWS
    getReviews = () => this.apiHandler.get('/getAllReviews')
    saveReview = reviewInfo => this.apiHandler.post('/createReview', reviewInfo)

}



export default reviewService