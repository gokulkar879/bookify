const passport=require("passport");
const googleStrategy=require("passport-google-oauth2");
const keys=require("./keys");
const User=require("../database/userModel");

passport.use(
    new googleStrategy({
        // passport for the Google Strat
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    }, (accessToken,refreshToken,profile,done) => {
        // passport call back function
        User.findOne({userID:profile.id}).then((currentUser)=>{
            if(currentUser==null){
                new User({
                    username:profile.displayName,
                    userID:profile.id,
                    email:profile.email
                }).save().then((newUser)=>{
                    console.log(newUser);
                    done(null,newUser);
                })
            }else{
                console.log("User exists in mongoDB");
                done(null,currentUser);
            }
        })
        
    })
)