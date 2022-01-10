const mongoose = require('mongoose')

const { Schema } = mongoose

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Article', ArticleSchema)