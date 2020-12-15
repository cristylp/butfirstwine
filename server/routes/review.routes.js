const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { response } = require('../app')

const Review = require('../models/review.model')
const User = require('../models/user.model')
const Wine = require('../models/wine.model')


// GET ALL REVIEWS -- por probar en POSTMAN
router.get('/getAllReviews', (req, res) => {

    Review
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/createReview', (req, res) => {

    const { user, wine, rating, description } = req.body

    Review
        .create({ user, wine, rating, description })
        .then(response => {
            const userPromise = User.findByIdAndUpdate(user, { $push: { reviews: response._id } }, { new: true }).populate('reviews')
            const winePromise = Wine.findByIdAndUpdate(wine, { $push: { reviews: response._id } }, { new: true })
            return Promise.all([userPromise, winePromise])
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router