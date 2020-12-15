const mongoose = require('mongoose')
const Schema = mongoose.Schema


const wineSchema = new Schema({
    name: {
        type: String,
        require: true
    },

    winery: {
        type: String,
        default: 'Unknown'
    },
    
    varietal: {
        type: String,
        enum: ['White', 'Red', 'Rose', 'Sweet', 'Sparkling']
    },
    
    country: {
        type: String,
        default: 'Unknown'
    },

    region: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    
    price: {
        type: Number
    },

    description: {
        type: String
    },

    imageUrl: {
        type: String,
        require: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
   
}, {
    timestamps: true
})


// wineSchema.index({ location: '2dsphere' })  ------- PARA EL MAPA

const Wine = mongoose.model('Wine', wineSchema)
module.exports = Wine
