const router=require("express").Router();
const passport=require("passport-google-oauth2");
const passportSetup=require("../config/passportConfig");

router.get("/signin",(req,res)=>{
    res.send("Signin-Page containing all options 1.Google 2.FB 3.Github 4.Twitter");
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