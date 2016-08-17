// config/passport.js
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

  var User = mongoose.model('User');

  passport.use(new GitHubStrategy({
      clientID: '8828ef79306a488ad480',
      clientSecret: 'faf3b6eee4feb0783eadeba5c2962a97c7d8dca1',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {      
      User.findOrCreate(
        { "login" : profile.username},
        { "nome" : profile.username},
        function(erro, user) {
          if(erro) {
            console.log(erro);
            return done(erro);
          }
          return done(null, user);
        }
      );
  }));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).exec().then(function(user) {
      done(null, user);
    });
  });

};
