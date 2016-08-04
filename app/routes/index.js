// app/routes/index.js
module.exports = function(app) {
  app.get('/', function(req, res) {
    var login = '';
    var logged = false;
    if(req.user) {
      login = req.user.login;
      logged = true;
    }
    res.render('index', { "logged" : logged, "loggedUser" : login});
  });
};
