const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const User = require('../database/schemas/User'); //import user model

//every request to backend, these functions take care of taking session id and checking valid
//then getting the user that belongs to the id, and serializing it with the request
passport.serializeUser((user, done) => {
    console.log("Serializing User");
    done(null, user.discordId);
});

//take discordId, search db for user object (so async)
passport.deserializeUser(async (discordId, done) => {
    console.log("Deserializing User");
    try {
        const user = await User.findOne({discordId});
        return user ? done(null,user) : done(null,null); //if user exists, then, else
    } catch (err) {
        console.log(err);
        done(err,null);
    }
});

passport.use(new DiscordStrategy ({
    clientID: process.env.DASHBOARD_CLIENT_ID,
    clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
    callbackURL: process.env.DASHBOARD_CLIENT_REDIRECT,
    scope: ['identify', 'guilds'],
  }, async (accessToken, refreshToken, profile, done) => { //done is a callback function, data (profile) from authentication
        const { id, username, discriminator, avatar, guilds } = profile;
        //console.log(id, username, discriminator, avatar, guilds);
        
        //if user exists, update username, etc. since they can change
        try {
            const findUser = await User.findOneAndUpdate({ discordId: id}, {
                discordTag: `${ username }#${ discriminator }`,
                avatar,
                guilds
            }, {new: true}); //updated user
            if ( findUser ) {
                console.log('user was found');
                //return updated user
                return done( null, findUser );  //need to invoke done function in order for auth to finish
            } else { //create user
                const newUser = await User.create({
                    discordId: id,
                    discordTag: `${ username }#${ discriminator }`,
                    avatar, //short for avatar: avatar
                    guilds,
                });
                return done( null, newUser );
            } 
        } catch (err) {
            console.log(err);
            return done(err,null);
        }
    
  }) 
);