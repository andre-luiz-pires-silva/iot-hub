var express = require('express');

module.exports = function() {
  var app = express();
  var load = require('express-load');
  var bodyParser = require('body-parser');

  var cookieParser = require('cookie-parser');
  var session = require('express-session');
  var passport = require('passport');
  var helmet = require('helmet');

  // variável de ambiente
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  app.use(cookieParser());
  app.use(session(
    { secret: 'homem avestruz',
      resave: true,
      saveUninitialized: true
    }
  ));
  app.use(passport.initialize());
  app.use(passport.session());

  // app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.nosniff());
  app.use(helmet.xssFilter());
  app.use(helmet.hidePoweredBy({setTo:'PHP 5.5.14'}));

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  app.get('*', function(req, res) {
    res.status(404).render('404');
  });

  return app;
};
