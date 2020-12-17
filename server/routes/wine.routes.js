const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { response } = require('../app')

const Wine = require('../models/wine.model')



// GET ALL WINES -- funcionando en POSTMAN
router.get('/getAllWines', (req, res) => {
    
    Wine
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// GET ONE WINE -- funcionando en POSTMAN
router.get('/getOneWine/:wine_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.wine_id)) {                // Implementación de sistema de seguridad por si no reconoce el ID (funcionando en POSTMAN)
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Wine
        .findById(req.params.wine_id)
        .populate({ path: 'reviews', populate: { path: 'user' } })
        .populate('favorites')  
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// FILTER WINE -- falta por probar en POSTMAN
router.get('/filter/:varietal', (req, res) => {
    console.log(req.params.varietal)

    Wine
        .find({ varietal: req.params.varietal })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// NEW WINE (si estas logged in solamente) -- funcionando en POSTMAN
router.post('/newWine', (req, res) => {
// console.log(req.body)

    Wine
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// EDIT WINE (solo el creador del vino)  -- funcionando en POSTMAN    
router.put('/editWine/:wine_id', (req, res) => {

    Wine 
        .findByIdAndUpdate(req.params.wine_id, req.body, { new: true })
        .populate({ path: 'reviews', populate: { path: 'user' } })
        .populate('favorites')  
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// DELETE WINE (solo el creador del vino)  -- funcionando en POSTMAN
router.delete('/deleteWine/:wine_id', (req, res) => {

    const wineId = req.params.wine_id

    Wine
        .findByIdAndDelete(wineId)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router