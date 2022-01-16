const router=require("express").Router();
const jwt=require("jsonwebtoken");
const keys=require("../config/keys");

router.post("/", (req, res) => {
    let id = req.body.id
    let data = req.body.data
    console.log(data);
    const token=jwt.sign({
        name:data.name,
        email:data.email,
        imageURL:data.imageURL
    },keys.jwt.jwtSecretKey,{
        expiresIn: "30d"
    });


    res.json({status:"ok",user:token});
})



module.exports = router