const mongoose = require('mongoose')



let postSchema = mongoose.Schema({
    date : {
        type :  Date,
        default : Date.now
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    content  : String,
    likes : [{
        type:mongoose.Schema.Types.ObjectId,
        ref : "user"
    }]
})

module.exports = mongoose.model('post',postSchema)