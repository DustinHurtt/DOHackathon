const {Schema, model} = require('mongoose')

const userSchema =  new Schema({
    user: {
        type: String,
        required: true,
    },


    
}, {
    timeseries: true,
    timestamps: true
})

const User =  model("User", userSchema)

module.exports = User
