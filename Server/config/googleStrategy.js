const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.google_client_id,
            clientSecret: process.env.client_secret,
            callbackURL: `${process.env.base_url}google/callback`,
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
