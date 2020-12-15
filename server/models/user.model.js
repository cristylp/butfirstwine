const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {
        type: String,
        require: true
    },

    password: {
        type: String,
        required: true
    },

    profileImg: {
        type: String,
        default: 'https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg'
    },

    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    }],

    role: {
        type: String,
        enum: ['ADMIN', 'GUEST'],
        default: 'GUEST'
    }, 

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
