const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    wine: {
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    },

    rating: {
        type: Number,
    },

    description: {
        type: String
    },


}, {
    timestamps: true
})


const Review = mongoose.model('Review', reviewSchema)
module.exports = Review