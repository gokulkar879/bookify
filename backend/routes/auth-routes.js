const router=require("express").Router();


router.post("/", (req, res) => {
    let id = req.body.id
    let data = req.body.data
    console.log(id, data)


    res.json({"hello": "hello"})
})



module.exports = router