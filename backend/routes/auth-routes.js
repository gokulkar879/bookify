const router=require("express").Router();
const passport=require("passport");
const passportSetup=require("../config/passportConfig");

router.get("/signin",(req,res)=>{
    console.log("came here")
    res.json({"message":"authenticated"});
    // link google signin button to /auth/google
})

router.get("/logout",(req,res)=>{
    req.logOut();
    // res.send("Logging out");
    res.redirect("/");
})

router.get("/google",passport.authenticate('google', { 
    scope:[ 'profile' ] 
}));

router.get("/google/redirect",(req,res)=>{
    // or profile where the book list will be 
    res.redirect("/home");

})


module.exports = router