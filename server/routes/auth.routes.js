const express = require('express')
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")


const User = require('../models/user.model')
const Wine = require('../models/wine.model')


// SIGN UP -- funcionando en POSTMAN
router.post('/signup', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Please fill all fields' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Password not safe' })
        return
    }

    User
        .findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'Username taken' })
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Login error ' }) : res.status(200).json(newUser)))
                .catch(() => res.status(500).json({ message: 'Error creating new user' }))
        })
})



// LOG IN -- funcionando en POSTMAN
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error authenticating user' })
            return
        }

        if (!theUser) {
            res.status(401).json(failureDetails)
            return
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.status(200).json(theUser))
    }) (req, res, next)
})



// LOG OUT -- funcionando en POSTMAN
router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Log out successful' })
})



// IF USER IS LOGGED IN -- funcionando en POSTMAN
router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'Unauthorized' }))



// EDIT USER -- funcionando en POSTMAN
router.put('/editUser/:user_id', (req, res) => {

    const {password, username} = req.body
    

    const salt = bcrypt.genSaltSync(10)
    const hashPass = bcrypt.hashSync(password, salt)                    

    User
        .findByIdAndUpdate(req.params.user_id, { username, password: hashPass }, { new: true })
        .populate({ path: 'reviews', populate: { path: 'wine' } })
        .then(response => res.json(response))
        .catch(err => console.log(err))
})



// // USER FAVORITES -- falta por probar en POSTMAN
// router.put('/favorites/:wine_id,' (req, res) => {

//     User
//         .findByIdAndUpdate(req.user._id)
//         .populate('favorites')    // revisar esto
//         .then(response => res.json(response))
//         .catch(err => console.log(err))
// })


module.exports = router