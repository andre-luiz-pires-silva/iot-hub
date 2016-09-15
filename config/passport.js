// config/passport.js
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var config = require('./config')();

module.exports = function() {

  var User = mongoose.model('User');

  var githubCallback;
  if (config.env == 'production') {
    githubCallback = 'http://' + config.domain + '/auth/github/callback';
  } else {
    githubCallback = 'http://' + config.domain + ':' + config.port + '/auth/github/callback';
  }

  passport.use(new GitHubStrategy({
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: githubCallback
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
