// config/passport.js
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
      clientID: '8828ef79306a488ad480',
      clientSecret: 'faf3b6eee4feb0783eadeba5c2962a97c7d8dca1',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
      Usuario.findOrCreate(
        { "login" : profile.username},
        { "nome" : profile.username},
        function(erro, usuario) {
          if(erro) {
            console.log(erro);
            return done(erro);
          }
          return done(null, usuario);
        }
      );
  }));

  passport.serializeUser(function(usuario, done) {
    done(null, usuario._id);
  });

  passport.deserializeUser(function(id, done) {
    Usuario.findById(id).exec().then(function(usuario) {
      done(null, usuario);
    });
  });

};
