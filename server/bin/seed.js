const mongoose = require('mongoose')
const User = require('../models/user.model')
const Wine = require('../models/wine.model')
// const Review = require('../models/review.model')

const dbName = 'butfirstWine'
mongoose.connect('mongodb+srv://cristylp:a112393c@cluster0.qe6ch.mongodb.net/butfirstwine', { useUnifiedTopology: true, useNewUrlParser: true })
// mongoose.connect(`mongodb://localhost/${dbName}`, { useUnifiedTopology: true, useNewUrlParser: true })




// USER SEEDING
const users = [
    {
        username: 'Cristy',
        password: '112393',
        profileImg: " ",
        favorites: [],
        role: 'ADMIN'
        }
    ]





// WINE SEEDING
const wines = [
    {
        name: 'Altos las Hormigas Malbec',
        winery: 'Bodega Altos Las Hormigas',
        varietal: 'Red',
        country: 'Argentina',
        region: {
            type: 'Point',
            coordinates: [-32.84047803876054, -68.81376679258645]
        },
        price: 16.00,
        description: 'On the nose, the variety fully unfolds, with its characteristic notes of fresh red plums, but also displaying aromas of strawberries and a subtle note of peppermint.The palate presents great intensity, character and a silky texture, highlighted by juicy red fruit flavors with an interesting note of pepper.This is a pleasure wine that lingers in the mouth.A classic Mendoza Malbec from an exceptional quality vintage, ideal to pair with various dishes, from red meats to pasta or grilled vegetables.',
        imageUrl: " "
    }, 
    {
        name: 'Catena Alta Malbec',
        winery: 'Bodega Catena Zapata',
        varietal: 'Red',
        country: 'Argentina',
        region: {
            type: 'Point',
            coordinates: [-32.84047803876054, -68.81376679258645]
        },
        price: 37.00,
        description:'',
        imageUrl: " "

    },
    {
        name: 'Pícaro del Águila Clarete',
        winery: 'Dominio del Águila',
        varietal: 'Rose',
        country: 'Spain',
        region: {
            type: 'Point',
            coordinates: [42.348980326735685, -3.696554242668918]
        },
        price: 20.00,
        description: '',
        imageUrl: " "
    },
    {
        name: 'Clark & Telephone Pinot Noir',
        winery: 'Belle Glos',
        varietal: 'Red',
        country: 'United States',
        region: {
            type: 'Point',
            coordinates: [38.29752860820046, -122.29133359287789]
        },
        price: 55.00,
        description: 'Deep ruby red in color with scarlet highlights, Clark & Telephone opens with bountiful aromas of red fruits of cranberry and raspberry jam, laced with clove, cedar, and holiday baking spices. Bold and complex flavors of crushed ripe cherry, cranberry and blueberry pie linger on the palate. The texture is rich and lively, and leads into a warm and structured finish.',
        imageUrl: " "
    },
    {
        name: 'Envidia Cochina',
        winery: '',
        varietal: 'White',
        country: 'Spain',
        region: {
            type: 'Point',
            coordinates: [42.58580157758301, -8.786058980903883]
        },
        price: 18.00,
        description: '',
        imageUrl: " "
    }
]


Wine 
    .create(wines)
    .then(allWinesCreated => {
        console.log(`Created ${allWinesCreated.length} wines`)
    })
    .then(() => User.create(users))
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
    })
    .then(() => mongoose.connection.close())

    .catch(err => console.log(err))












    

    // REVIEWS SEEDING