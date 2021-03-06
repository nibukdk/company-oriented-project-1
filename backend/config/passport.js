let JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  User = require("../models/user"),
  Config = require("./keys");

module.exports = (passport) =>{
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = Config.secretOrKey;
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) =>{
      User.getByUserId({ id: jwt_payload._id }, (err, user) =>{
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );
};
