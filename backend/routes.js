const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Article = require('./model.js')


router.get('/',async (req, res) => {

    try {
      let articles = await Article.find()
      console.log(articles)
      res.json({data: articles})
    } catch(err) {
      res.json({error: "sorry"})
    }
})

router.post('/',async (req, res) => {
    let newArticle = new Article({
        title: req.body.title,
        name: req.body.name,
        description: req.body.description
    })
    try {
       await newArticle.save()
       res.json({"message": "success"})
    } catch(err) {
       res.json({"message": "error"})
    }
})

module.exports = router