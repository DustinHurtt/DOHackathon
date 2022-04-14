const {Schema, model} = require('mongoose')

const userSchema =  new Schema({
    user: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    favoriteFood: {
        type: String
    },
    morningOrNightPerson: {
        type: String,
        enum: ["Morning Person", "Night Person"]
    }

}, {
    timeseries: true,
    timestamps: true
})

const User =  model("User", userSchema)

module.exports = User
